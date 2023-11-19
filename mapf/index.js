// Импорт необходимых функций и классов
import { aStar } from "./astar.js";
import {
  findLeafNodes,
  ctGoalNode,
  getOptimalNode,
  computeConflicts,
  computeUpdatedSolution,
} from "./conflictTreeFunctions.js";
import { ConflictNode } from "./conflictTree.js";

// Функция для решения задачи MAPF (Multi-Agent Pathfinding)
function mapf(agentsData, gridMaze) {
  // Получение всех ключей агентов (номеров агентов)
  const agentsList = Object.keys(agentsData);
  const agentCombinations = [];

  // Генерация всех возможных комбинаций агентов
  for (let i = 0; i < agentsList.length - 1; i++) {
    for (let j = i + 1; j < agentsList.length; j++) {
      agentCombinations.push([agentsList[i], agentsList[j]]);
    }
  }

  const grid = gridMaze;

  // Вычисление всех путей с использованием низкоуровневого поиска A*
  let conflicts = [];
  const allSolutions = {};

  // Вычисление оптимальных путей для каждого агента
  for (const agent in agentsData) {
    // Определение начальной и конечной точек для каждого агента
    const start = agentsData[agent][0];
    const end = agentsData[agent][1];

    // Вычисление пути с использованием алгоритма A*
    let route = aStar(grid, start, end, conflicts);
    if (route == null) {
      route = [[["No Solution"], -1]]; // В случае отсутствия пути
    }
    route.unshift([start, 0]); // Добавление начальной позиции
    route.reverse(); // Обращение порядка для удобства

    allSolutions[agent] = route; // Сохранение найденного пути для текущего агента
  }

  // Создание корневого узла конфликтов
  const root_node = new ConflictNode(conflicts, allSolutions);

  // Вычисление общей стоимости для всех агентов
  root_node.computeTotalCost();

  let goalNode = null;
  let currentNode = root_node;

  while (true) {
    // Выполнение валидации
    const leafNodes = findLeafNodes(root_node);

    // Поиск узла-цели (без конфликтов)
    goalNode = ctGoalNode(leafNodes, agentCombinations);

    if (goalNode !== null) {
      // Не выходить из цикла, даже если goalNode найден
      break;
    }

    // Обновление текущего узла
    currentNode = getOptimalNode(leafNodes);

    // Поиск конфликтов
    for (let combination of agentCombinations) {
      const agent1 = combination[0];
      const agent2 = combination[1];

      const path1 = currentNode.allSolutions[agent1];
      const path2 = currentNode.allSolutions[agent2];

      conflicts = computeConflicts(agent1, agent2, path1, path2);

      // Решение конфликта для одной комбинации агентов
      if (conflicts.length !== 0) {
        const currentConflicts = currentNode.conflicts;

        // Constraint 1
        const agentPositions1 = agentsData[agent1];
        const updatedConflicts1 = [...currentConflicts, conflicts[0]];

        const updatedSolutions1 = { ...currentNode.allSolutions };
        updatedSolutions1[agent1] = computeUpdatedSolution(
          agent1,
          agentPositions1,
          updatedConflicts1,
          grid
        );

        currentNode.right = new ConflictNode(
          updatedConflicts1,
          updatedSolutions1
        );
        currentNode.right.computeTotalCost();

        // Constraint 2
        const agentPositions2 = agentsData[agent2];
        const updatedConflicts2 = [...currentConflicts, conflicts[1]];

        const updatedSolutions2 = { ...currentNode.allSolutions };
        updatedSolutions2[agent2] = computeUpdatedSolution(
          agent2,
          agentPositions2,
          updatedConflicts2,
          grid
        );

        currentNode.left = new ConflictNode(
          updatedConflicts2,
          updatedSolutions2
        );
        currentNode.left.computeTotalCost();

        // Не прерываем цикл для обновления конфликтов для всех комбинаций агентов
      }
    }
  }

  return goalNode.allSolutions; // Возвращаем оптимальные пути для агентов
}

// Пример использования
const agentsData = {
  1: [
    [0, 0],
    [4, 4],
  ],
  2: [
    [0, 4],
    [2, 3],
  ],
  3: [
    [0, 3],
    [0, 0],
  ],

  5: [
    [2, 3],
    [4, 3],
  ],
};

const gridMaze = [
  [0, 0, 0, 0, 0],
  [1, 0, 0, 0, 1],
  [0, 1, 0, 0, 0],
  [0, 0, 0, 1, 0],
  [0, 0, 0, 0, 0],
];

const result = mapf(agentsData, gridMaze);

for (const agent in result) {
  console.log("agent " + agent + ":", result[agent].reverse());
}
