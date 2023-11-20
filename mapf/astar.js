import { HeapQueue } from "../lib/heapQueue.js";
import { manhattanHeuristic } from "./heuristics.js";

/*
  Функция A* для поиска оптимального пути от начальной точки до конечной с учетом ограничений на движение.

  Параметры:
    - gridMaze: сетка, представляющая карту с препятствиями
    - start: начальная точка [x, y]
    - goal: конечная точка [x, y]
    - constraints: массив ограничений на движение агентов в формате [агент, позиция, временная метка, тип конфликта]

  Возвращает:
    - Оптимальный путь в формате массива [позиция, временная метка]
    - Или null, если путь не найден
*/

export function aStar(gridMaze, start, goal, constraints) {
  // Используем эвристику Манхэттен для оценки стоимости клеток
  let heuristic = manhattanHeuristic;

  // Возможные шаги включая "ждать"
  let moves = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
    [0, 0],
  ];

  // Множество посещенных точек
  let visitedSet = new Set();

  // Словарь для хранения предыдущих точек в пути
  let cameFrom = {};

  // Словарь для хранения стоимости пути от старта до текущей точки
  let gScore = new Map();

  // Словарь для хранения общей стоимости (gScore + эвристика) от старта до текущей точки
  let fScore = new Map();

  // Начальные значения для стартовой точки
  gScore.set(start.toString(), 0);
  fScore.set(start.toString(), heuristic(start, goal));

  // Инициализация мин-кучи (приоритетной очереди)
  let minHeap = new HeapQueue();
  minHeap.heappush([fScore.get(start.toString()), start, 0]);

  // Таймер для обработки временных ограничений
  let timer = 0;

  // Основной цикл A*
  while (minHeap.heap.length > 0) {
    timer += 1;

    // Извлечение текущей точки из очереди с наименьшей стоимостью
    let current = minHeap.heappop();
    let currentPosition = current[1];
    let currentTimestamp = current[2];

    // Проверка, достигнута ли конечная точка
    if (currentPosition.toString() === goal.toString()) {
      // Восстановление оптимального пути
      let path = [];
      let timestamp = currentTimestamp;

      while (cameFrom[[currentPosition, timestamp]]) {
        path.push([currentPosition, timestamp]);
        const prev = cameFrom[[currentPosition, timestamp]];
        currentPosition = prev[0];
        timestamp = prev[1];
      }

      path.reverse();
      return path;
    }

    // Пометка текущей точки как посещенной
    visitedSet.add(currentPosition.toString());

    // Получение соседей текущей точки
    let neighbors = [];

    for (let [i, j] of moves) {
      let neighbor = [currentPosition[0] + i, currentPosition[1] + j];
      let validFlag = true;

      // Проверка на выход за границы карты или наличие препятствий
      if (
        neighbor[0] < 0 ||
        neighbor[0] >= gridMaze.length ||
        neighbor[1] < 0 ||
        neighbor[1] >= gridMaze[0].length ||
        gridMaze[neighbor[0]][neighbor[1]] === 1
      ) {
        validFlag = false;
      }

      // Проверка наличия временных ограничений
      for (let c of constraints) {
        if (c[2] === timer) {
          if (c[3] === "position") {
            // Проверка конфликта по позиции
            if (c[1][0] === neighbor[0] && c[1][1] === neighbor[1]) {
              validFlag = false;
            }
          } else if (c[3] === "edge") {
            // Проверка конфликта по ребру
            if (
              (c[1][0][0] === currentPosition[0] &&
                c[1][0][1] === currentPosition[1] &&
                c[1][1][0] === neighbor[0] &&
                c[1][1][1] === neighbor[1]) ||
              (c[1][0][0] === neighbor[0] &&
                c[1][0][1] === neighbor[1] &&
                c[1][1][0] === currentPosition[0] &&
                c[1][1][1] === currentPosition[1])
            ) {
              validFlag = false;
            }
          }
        }
      }

      // Добавление соседа, если он допустим
      if (validFlag) {
        neighbors.push(neighbor);
      }
    }

    // Обработка соседей
    for (let neighbor of neighbors) {
      // Пропуск соседа, если он уже был посещен (кроме случая, когда он совпадает с текущей позицией по горизонтали)
      if (
        visitedSet.has(neighbor.toString()) &&
        neighbor[0] !== currentPosition[0]
      ) {
        continue;
      }

      // Вычисление новой стоимости пути от старта до соседа
      let neighborGScore = gScore.get(currentPosition.toString()) + 1;

      // Вычисление эвристической оценки для соседа
      let neighborHeuristic = heuristic(neighbor, goal);

      // Общая стоимость от старта до соседа
      let neighborFScore = neighborGScore + neighborHeuristic;

      // Обновление информации, если новый путь короче или сосед не посещен
      if (
        !gScore.has(neighbor.toString()) ||
        neighborGScore < gScore.get(neighbor.toString())
      ) {
        cameFrom[[neighbor, currentTimestamp + 1]] = [
          currentPosition,
          currentTimestamp,
        ];
        gScore.set(neighbor.toString(), neighborGScore);
        fScore.set(neighbor.toString(), neighborFScore);

        // Добавление соседа в очередь на обработку
        minHeap.heappush([
          fScore.get(neighbor.toString()),
          neighbor,
          currentTimestamp + 1,
        ]);
      }
    }
  }

  // Если цель недостижима, возвращаем null
  return null;
}

// Пример использования функции A*
let gridMaze = [
  [1, 0, 0, 1],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [1, 0, 0, 1],
];

let route1 = aStar(
  gridMaze,
  [1, 0],
  [2, 3],
  [
    [2, [1, 1], 1, "position"],
    [2, [2, 2], 3, "position"],
    [2, [2, 1], 2, "position"],
  ]
);
