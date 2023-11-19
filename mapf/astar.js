import { HeapQueue } from "../lib/heapQueue";
/*
Эвристика Манхэтэнна

Нужна будет что-бы оценить стоимость возможной клетки на которую хочет пойти агент,
если клетка отдаляет нас от цели по горизонатали, или вертикали, это нежелательная клетка
*/
function manhattanHeuristic(a, b) {
  // |x2 - x1| + |y2 - y1|
  let dx = Math.abs(b[0] - a[0]);
  let dy = Math.abs(b[1] - a[1]);
  return dx + dy;
}

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

      while (cameFrom[[currentPosition, timestamp]]) {
        path.push([currentPosition, timestamp]);
        const prev = cameFrom[[currentPosition, timestamp]];
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
            if (c[1].x === neighbor[0] && c[1].y === neighbor[1]) {
              validFlag = false;
            }
          } else if (c[3] === "edge") {
            if (
              (c[1][0].x === currentPosition[0] &&
                c[1][0].y === currentPosition[1] &&
                c[1][1].x === neighbor[0] &&
                c[1][1].y === neighbor[1]) ||
              (c[1][0].x === neighbor[0] &&
                c[1][0].y === neighbor[1] &&
                c[1][1].x === currentPosition[0] &&
                c[1][1].y === currentPosition[1])
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
        cameFrom[[neighbor, currentTimestamp + 1]] = [
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

// Example usage
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

console.log(route1);
