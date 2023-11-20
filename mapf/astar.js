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
  let heuristic = manhattanHeuristic;
  let moves = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
    [0, 0],
  ];

  let visitedSet = new Set();
  let cameFrom = {};

  let gScore = new Map();
  let fScore = new Map();

  gScore.set(start.toString(), 0);
  fScore.set(start.toString(), heuristic(start, goal));

  let minHeap = new HeapQueue();
  minHeap.heappush([fScore.get(start.toString()), start, 0]);

  let timer = 0;

  while (minHeap.heap.length > 0) {
    timer += 1;

    let current = minHeap.heappop();
    let currentPosition = current[1];
    let currentTimestamp = current[2];

    if (currentPosition.toString() === goal.toString()) {
      let path = [];
      let timestamp = currentTimestamp;

      while (cameFrom[`${currentPosition}-${timestamp}`]) {
        path.push([currentPosition, timestamp]);
        const prev = cameFrom[`${currentPosition}-${timestamp}`];
        currentPosition = prev[0];
        timestamp = prev[1];
      }

      path.reverse();
      return path;
    }

    visitedSet.add(currentPosition.toString());

    let neighbors = [];

    for (let [i, j] of moves) {
      let neighbor = [currentPosition[0] + i, currentPosition[1] + j];
      let validFlag = true;

      if (
        neighbor[0] < 0 ||
        neighbor[0] >= gridMaze.length ||
        neighbor[1] < 0 ||
        neighbor[1] >= gridMaze[0].length ||
        (gridMaze[neighbor[0]] && gridMaze[neighbor[0]][neighbor[1]] === 1)
      ) {
        validFlag = false;
      }

      for (let c of constraints) {
        if (c[2] === timer) {
          if (c[3] === "position") {
            if (c[1][0] === neighbor[0] && c[1][1] === neighbor[1]) {
              validFlag = false;
            }
          } else if (c[3] === "edge") {
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

      if (validFlag) {
        neighbors.push(neighbor);
      }
    }

    for (let neighbor of neighbors) {
      if (
        visitedSet.has(neighbor.toString()) &&
        neighbor[0] !== currentPosition[0]
      ) {
        continue;
      }

      let neighborGScore = gScore.get(currentPosition.toString()) + 1;
      let neighborHeuristic = heuristic(neighbor, goal);
      let neighborFScore = neighborGScore + neighborHeuristic;

      if (
        !gScore.has(neighbor.toString()) ||
        neighborGScore < gScore.get(neighbor.toString())
      ) {
        cameFrom[`${neighbor}-${currentTimestamp + 1}`] = [
          currentPosition,
          currentTimestamp,
        ];
        gScore.set(neighbor.toString(), neighborGScore);
        fScore.set(neighbor.toString(), neighborFScore);

        minHeap.heappush([
          fScore.get(neighbor.toString()),
          neighbor,
          currentTimestamp + 1,
        ]);
      }
    }
  }

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
