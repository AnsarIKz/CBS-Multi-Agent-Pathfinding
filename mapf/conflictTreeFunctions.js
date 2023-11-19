// Импорт необходимых функций
import { aStar } from "./astar.js";

function getCoordsAtTimestamp(mask, timestamp) {
  for (const [coords, t] of mask) {
    if (t === timestamp) {
      return coords;
    }
  }
  return null; // Значения координат не найдены для указанного timestamp
}

// Функция для вычисления конфликтов между двумя агентами
export function computeConflicts(agent1, agent2, path1, path2) {
  const conflicts = [];
  const minLength = Math.min(path1.length, path2.length) - 1;
  // Проверка конфликтов на каждом временном шаге
  for (let timestamp = 0; timestamp < minLength; timestamp++) {
    let position1 = getCoordsAtTimestamp(path1, timestamp);
    let position2 = getCoordsAtTimestamp(path2, timestamp);
    // Конфликт обнаружен

    if (position1.toString() == position2.toString()) {
      conflicts.push([agent1, position1, timestamp, "position"]);
      conflicts.push([agent2, position1, timestamp, "position"]);

      return conflicts;
    }
  }

  // Вычисление конфликтов на ребре (a-b-c-d, g-e-d-c-x: конфликт на c-d/d-c)
  for (let timestamp = 0; timestamp < minLength - 1; timestamp++) {
    const agent1Position1 = getCoordsAtTimestamp(path1, timestamp); // c
    const agent1Position2 = getCoordsAtTimestamp(path1, timestamp + 1); // d

    const agent2Position1 = getCoordsAtTimestamp(path2, timestamp); // d
    const agent2Position2 = getCoordsAtTimestamp(path2, timestamp + 1); // c

    // Обнаружен конфликт на ребре
    if (
      agent1Position1.toString() === agent2Position2.toString() &&
      agent1Position2.toString() === agent2Position1.toString()
    ) {
      conflicts.push([
        agent1,
        [agent1Position1, agent1Position2],
        timestamp + 1,
        "edge",
      ]);
      conflicts.push([
        agent2,
        [agent1Position2, agent2Position2],
        timestamp + 1,
        "edge",
      ]);
      return conflicts;
    }
  }

  return conflicts; // = []
}

// Функция для поиска всех листовых узлов в дереве конфликтов
export function findLeafNodes(rootNode) {
  const leafNodes = [];

  function getLeafNodes(node) {
    if (node !== null) {
      if (node.left === null && node.right === null) {
        leafNodes.push(node);
        return;
      } else {
        getLeafNodes(node.left);
        getLeafNodes(node.right);
        return;
      }
    }
    return;
  }

  getLeafNodes(rootNode);

  return leafNodes;
}

// Выполнение валидации CT: поиск узла-цели без конфликтов
export function ctGoalNode(leafNodes, agentCombinations) {
  const goalNodes = [];

  for (const node of leafNodes) {
    let conflictsFlag = false; // Сбрасываем флаг для каждого узла

    for (const combination of agentCombinations) {
      const agent1 = combination[0];
      const agent2 = combination[1];

      const path1 = node.allSolutions[agent1];
      const path2 = node.allSolutions[agent2];
      const conflicts = computeConflicts(agent1, agent2, path1, path2);

      if (conflicts.length !== 0) {
        conflictsFlag = true;
        break; // Прерываем цикл, если найден хотя бы один конфликт
      }
    }

    if (!conflictsFlag) {
      goalNodes.push(node);
    }
  }

  if (goalNodes.length === 0) {
    return null;
  } else {
    const goalNode = getOptimalNode(goalNodes);
    return goalNode;
  }
}

// Функция для выбора оптимального листового узла на основе общей стоимости и числа конфликтов
export function getOptimalNode(leafNodes) {
  leafNodes.sort((a, b) => a.totalCost - b.totalCost);

  // Разрыв связей с CAT (таблицей избежания конфликтов)
  const leastCost = leafNodes[0].totalCost;
  const leafNodesLeastCost = [];

  for (const node of leafNodes) {
    if (node.totalCost === leastCost) {
      leafNodesLeastCost.push(node);
    }
  }

  leafNodesLeastCost.sort((a, b) => a.conflicts.length - b.conflicts.length);

  return leafNodesLeastCost[0];
}

// Получение конфликтов для данного агента только
function filterConflicts(conflicts, agent) {
  const agentConflicts = [];

  // Итерация по всем конфликтам
  for (const conflict of conflicts) {
    // Обновление сетки в случае конфликта для данного агента
    if (conflict[0] === agent) {
      agentConflicts.push(conflict);
    }
  }

  return agentConflicts;
}

// Вычисление решения для агента при новых ограничениях
export function computeUpdatedSolution(
  agent,
  agentPositions,
  conflicts,
  gridMaze
) {
  const start = agentPositions[0];
  const end = agentPositions[1];
  const agentConflicts = filterConflicts(conflicts, agent);

  let path = aStar(gridMaze, start, end, agentConflicts);

  if (path == null) {
    path = [[["No Solution"], -1]];
  } else {
    // Проверка конфликтов и корректировка пути
    for (const conflict of agentConflicts) {
      const timestamp = conflict[2];
      const conflictingPosition = conflict[1];

      // Удаление конфликтующих позиций и добавление скорректированного пути
      path = path.filter(
        ([position, t]) =>
          t < timestamp ||
          position.toString() !== conflictingPosition.toString()
      );
      path.unshift([start, 0]); // Добавление начальной позиции
      path.reverse(); // Обращение порядка для удобства
    }
  }

  return path;
}
