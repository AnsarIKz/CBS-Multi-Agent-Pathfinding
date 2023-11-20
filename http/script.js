const gridMaze = [
  [
    1, 0, 0, 1, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0,
    0, 0, 0, 0, 0,
  ],
  [
    1, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 1,
  ],
  [
    1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0,
  ],
  [
    0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1,
    0, 0, 0, 1, 0,
  ],
  [
    0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0,
    0, 0, 0, 0, 0,
  ],
  [
    1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0,
    1, 0, 0, 0, 0,
  ],
  [
    0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1,
    0, 0, 0, 0, 0,
  ],
  [
    0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    0, 0, 0, 1, 0,
  ],
  [
    1, 0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0,
    0, 0, 0, 0, 0,
  ],
  [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0,
    0, 0, 0, 0, 0,
  ],
  [
    0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1,
    0, 1, 1, 0, 0,
  ],
  [
    0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0,
    0, 0, 0, 0, 0,
  ],
  [
    0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 1,
    0, 1, 1, 0, 0,
  ],
  [
    0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0,
    1, 1, 0, 0, 0,
  ],
  [
    0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0,
    0, 0, 0, 0, 0,
  ],
  [
    0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 1, 0, 0, 1,
  ],
  [
    1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1,
    0, 0, 1, 0, 1,
  ],
  [
    0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1,
    0, 1, 0, 0, 0,
  ],
  [
    0, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0,
    0, 0, 0, 1, 0,
  ],
  [
    0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 1,
  ],
  [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0,
    0, 0, 0, 1, 1,
  ],
  [
    0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0,
  ],
  [
    1, 0, 1, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 0,
    0, 0, 0, 0, 0,
  ],
  [
    1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0,
    0, 1, 0, 0, 0,
  ],
  [
    1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0,
    0, 0, 0, 0, 0,
  ],
  [
    0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0,
    0, 0, 0, 1, 0,
  ],
  [
    0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1,
    0, 0, 1, 0, 0,
  ],
  [
    0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0,
  ],
  [
    0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0,
    1, 1, 0, 0, 0,
  ],
  [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0,
    0, 0, 0, 1, 0,
  ],
];

const agentPaths = {
  agent1: [
    [[2, 0], 16],
    [[1, 0], 15],
    [[1, 1], 14],
    [[0, 1], 13],
    [[0, 2], 12],
    [[0, 3], 11],
    [[0, 4], 10],
    [[0, 5], 9],
    [[0, 6], 8],
    [[0, 7], 7],
    [[0, 8], 6],
    [[0, 9], 5],
    [[0, 10], 4],
    [[0, 11], 3],
    [[0, 12], 2],
    [[0, 13], 1],
    [[0, 14], 0],
  ],
  agent2: [
    [[23, 10], 6],
    [[22, 10], 5],
    [[21, 10], 4],
    [[20, 10], 3],
    [[20, 11], 2],
    [[20, 12], 1],
    [[19, 12], 0],
  ],
  agent3: [
    [["No Solution"], -1],
    [[11, 21], 0],
  ],
  agent4: [
    [[26, 13], 16],
    [[26, 14], 15],
    [[26, 15], 14],
    [[26, 16], 13],
    [[26, 17], 12],
    [[25, 17], 11],
    [[25, 18], 10],
    [[25, 19], 9],
    [[25, 20], 8],
    [[25, 21], 7],
    [[25, 22], 6],
    [[25, 23], 5],
    [[25, 24], 4],
    [[25, 25], 3],
    [[25, 26], 2],
    [[25, 27], 1],
    [[25, 28], 0],
  ],
  agent5: [
    [[25, 1], 6],
    [[25, 2], 5],
    [[26, 2], 4],
    [[26, 3], 3],
    [[26, 4], 2],
    [[25, 4], 1],
    [[25, 5], 0],
  ],
  agent6: [
    [[27, 14], 13],
    [[26, 14], 12],
    [[24, 14], 10],
    [[23, 14], 9],
    [[22, 14], 8],
    [[22, 13], 7],
    [[22, 12], 6],
    [[22, 11], 5],
    [[22, 10], 4],
    [[22, 9], 3],
    [[22, 8], 2],
    [[21, 8], 1],
    [[21, 7], 0],
  ],
  agent7: [
    [[17, 28], 17],
    [[16, 28], 16],
    [[15, 28], 15],
    [[15, 27], 14],
    [[15, 26], 13],
    [[14, 26], 12],
    [[13, 26], 11],
    [[12, 26], 10],
    [[12, 25], 9],
    [[11, 25], 8],
    [[10, 25], 7],
    [[10, 24], 6],
    [[10, 23], 5],
    [[9, 23], 4],
    [[8, 23], 3],
    [[7, 23], 2],
    [[7, 24], 1],
    [[6, 24], 0],
  ],
  agent8: [
    [[5, 13], 11],
    [[5, 12], 10],
    [[5, 11], 9],
    [[6, 11], 8],
    [[7, 11], 7],
    [[8, 11], 6],
    [[8, 10], 5],
    [[9, 10], 4],
    [[10, 10], 3],
    [[11, 10], 2],
    [[12, 10], 1],
    [[13, 10], 0],
  ],
  agent9: [
    [[14, 22], 32],
    [[14, 21], 31],
    [[13, 21], 30],
    [[13, 20], 29],
    [[13, 19], 28],
    [[12, 19], 27],
    [[11, 19], 26],
    [[10, 19], 25],
    [[9, 19], 24],
    [[8, 19], 23],
    [[7, 19], 22],
    [[6, 19], 21],
    [[5, 19], 20],
    [[5, 18], 19],
    [[5, 17], 18],
    [[5, 16], 17],
    [[5, 15], 16],
    [[4, 15], 15],
    [[4, 14], 14],
    [[3, 14], 13],
    [[3, 13], 12],
    [[3, 12], 11],
    [[2, 12], 10],
    [[2, 11], 9],
    [[1, 11], 8],
    [[1, 10], 7],
    [[1, 9], 6],
    [[1, 8], 5],
    [[0, 8], 4],
    [[0, 7], 3],
    [[0, 6], 2],
    [[0, 5], 1],
    [[-1, 5], 0],
  ],
  agent10: [
    [[28, 7], 27],
    [[27, 7], 26],
    [[27, 6], 25],
    [[26, 6], 24],
    [[25, 6], 23],
    [[25, 7], 22],
    [[24, 7], 21],
    [[23, 7], 20],
    [[22, 7], 19],
    [[21, 7], 18],
    [[20, 7], 17],
    [[19, 7], 16],
    [[18, 7], 15],
    [[17, 7], 14],
    [[17, 8], 13],
    [[17, 9], 12],
    [[17, 10], 11],
    [[17, 11], 10],
    [[16, 11], 9],
    [[15, 11], 8],
    [[15, 12], 7],
    [[15, 13], 6],
    [[14, 13], 5],
    [[14, 14], 4],
    [[14, 15], 3],
    [[15, 15], 2],
    [[15, 16], 1],
    [[16, 16], 0],
  ],
  agent11: [
    [[21, 21], 22],
    [[20, 21], 21],
    [[20, 20], 20],
    [[19, 20], 19],
    [[19, 19], 18],
    [[18, 19], 17],
    [[17, 19], 16],
    [[16, 19], 15],
    [[15, 19], 14],
    [[14, 19], 13],
    [[13, 19], 12],
    [[12, 19], 11],
    [[11, 19], 10],
    [[10, 19], 9],
    [[9, 19], 8],
    [[8, 19], 7],
    [[7, 19], 6],
    [[6, 19], 5],
    [[5, 19], 4],
    [[4, 19], 3],
    [[3, 19], 2],
    [[2, 19], 1],
    [[2, 18], 0],
  ],
  agent12: [
    [[21, 25], 25],
    [[20, 25], 24],
    [[20, 24], 23],
    [[19, 24], 22],
    [[18, 24], 21],
    [[17, 24], 20],
    [[16, 24], 19],
    [[15, 24], 18],
    [[14, 24], 17],
    [[13, 24], 16],
    [[13, 25], 15],
    [[12, 25], 14],
    [[11, 25], 13],
    [[10, 25], 12],
    [[10, 24], 11],
    [[10, 23], 10],
    [[10, 22], 9],
    [[9, 22], 8],
    [[8, 22], 7],
    [[7, 22], 6],
    [[6, 22], 5],
    [[5, 22], 4],
    [[4, 22], 3],
    [[3, 22], 2],
    [[2, 22], 1],
    [[1, 22], 0],
  ],
  agent13: [
    [[4, 5], 11],
    [[4, 4], 10],
    [[3, 4], 9],
    [[3, 3], 8],
    [[2, 3], 7],
    [[2, 2], 6],
    [[2, 1], 5],
    [[1, 1], 4],
    [[0, 1], 3],
    [[0, 2], 2],
    [[0, 3], 1],
    [[-1, 3], 0],
  ],
  agent14: [
    [[28, 12], 16],
    [[27, 12], 15],
    [[26, 12], 14],
    [[25, 12], 13],
    [[25, 13], 12],
    [[25, 14], 11],
    [[24, 15], 9],
    [[23, 15], 8],
    [[23, 16], 7],
    [[22, 16], 6],
    [[21, 16], 5],
    [[21, 15], 4],
    [[21, 14], 3],
    [[22, 14], 2],
    [[22, 13], 1],
    [[23, 13], 0],
  ],
  agent15: [
    [[4, 3], 16],
    [[4, 2], 15],
    [[5, 2], 14],
    [[5, 1], 13],
    [[5, 0], 12],
    [[6, 0], 11],
    [[7, 0], 10],
    [[8, 0], 9],
    [[8, 1], 8],
    [[9, 1], 7],
    [[10, 1], 6],
    [[11, 1], 5],
    [[12, 1], 4],
    [[13, 1], 3],
    [[14, 1], 2],
    [[15, 1], 1],
    [[16, 1], 0],
  ],
  agent16: [
    [[15, 2], 32],
    [[14, 2], 31],
    [[13, 2], 30],
    [[12, 2], 29],
    [[12, 3], 28],
    [[11, 3], 27],
    [[10, 3], 26],
    [[10, 4], 25],
    [[10, 5], 24],
    [[10, 6], 23],
    [[10, 7], 22],
    [[10, 8], 21],
    [[10, 9], 20],
    [[10, 10], 19],
    [[9, 10], 18],
    [[8, 10], 17],
    [[8, 11], 16],
    [[7, 11], 15],
    [[7, 12], 14],
    [[7, 13], 13],
    [[7, 14], 12],
    [[7, 15], 11],
    [[7, 16], 10],
    [[7, 17], 9],
    [[7, 18], 8],
    [[7, 19], 7],
    [[6, 19], 6],
    [[6, 20], 5],
    [[6, 21], 4],
    [[6, 22], 3],
    [[6, 23], 2],
    [[6, 24], 1],
    [[6, 25], 0],
  ],
  agent17: [
    [[15, 0], 19],
    [[15, 1], 18],
    [[15, 2], 17],
    [[15, 3], 16],
    [[15, 4], 15],
    [[15, 5], 14],
    [[15, 6], 13],
    [[15, 7], 12],
    [[15, 8], 11],
    [[15, 9], 10],
    [[16, 9], 9],
    [[17, 9], 8],
    [[17, 10], 7],
    [[17, 11], 6],
    [[18, 11], 5],
    [[18, 12], 4],
    [[18, 13], 3],
    [[18, 14], 2],
    [[18, 15], 1],
    [[19, 15], 0],
  ],
  agent18: [
    [[13, 10], 21],
    [[13, 9], 20],
    [[14, 9], 19],
    [[15, 9], 18],
    [[15, 8], 17],
    [[15, 7], 16],
    [[16, 7], 15],
    [[18, 7], 13],
    [[19, 7], 12],
    [[20, 7], 11],
    [[21, 7], 10],
    [[21, 8], 9],
    [[22, 8], 8],
    [[22, 9], 7],
    [[22, 10], 6],
    [[23, 10], 5],
    [[24, 10], 4],
    [[25, 10], 3],
    [[25, 11], 2],
    [[25, 12], 1],
    [[24, 12], 0],
  ],
  agent19: [
    [[19, 22], 33],
    [[18, 22], 32],
    [[17, 22], 31],
    [[16, 22], 30],
    [[16, 21], 29],
    [[16, 20], 28],
    [[15, 20], 27],
    [[14, 20], 26],
    [[13, 20], 25],
    [[13, 19], 24],
    [[13, 18], 23],
    [[13, 17], 22],
    [[14, 17], 21],
    [[14, 16], 20],
    [[14, 15], 19],
    [[13, 15], 18],
    [[12, 15], 17],
    [[12, 14], 16],
    [[11, 14], 15],
    [[10, 14], 14],
    [[10, 13], 13],
    [[10, 12], 12],
    [[10, 11], 11],
    [[10, 10], 10],
    [[10, 9], 9],
    [[10, 8], 8],
    [[10, 7], 7],
    [[10, 6], 6],
    [[10, 5], 5],
    [[10, 4], 4],
    [[10, 3], 3],
    [[10, 2], 2],
    [[10, 1], 1],
    [[10, 0], 0],
  ],
  agent20: [
    [[26, 4], 18],
    [[25, 4], 17],
    [[25, 5], 16],
    [[24, 5], 15],
    [[23, 5], 14],
    [[23, 6], 13],
    [[22, 6], 12],
    [[22, 7], 11],
    [[20, 7], 9],
    [[19, 7], 8],
    [[19, 6], 7],
    [[19, 5], 6],
    [[18, 5], 5],
    [[17, 5], 4],
    [[16, 5], 3],
    [[15, 5], 2],
    [[14, 5], 1],
    [[13, 5], 0],
  ],
};

const gridContainer = document.getElementById("grid-container");
const timeSlider = document.getElementById("time-slider");
const maxTime = Math.max(
  ...Object.values(agentPaths).flatMap((path) => path.map((point) => point[1]))
);

function createGrid() {
  for (let i = 0; i < gridMaze.length; i++) {
    for (let j = 0; j < gridMaze[i].length; j++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      if (gridMaze[i][j] === 1) {
        cell.classList.add("stone");
      }
      gridContainer.appendChild(cell);
    }
  }
}

function updatePaths(time) {
  const agents = Object.keys(agentPaths);

  agents.forEach((agent) => {
    const agentPath = agentPaths[agent];
    const currentPos = agentPath.find((point) => point[1] === time);

    if (currentPos) {
      const [x, y] = currentPos[0];
      const index = x * gridMaze[0].length + y;
      const cell = gridContainer.children[index];
      const agentPathDiv = document.createElement("div");
      agentPathDiv.classList.add("agent-path");
      agentPathDiv.style.backgroundColor = stringToColor(agent); // Function to get different colors
      cell.appendChild(agentPathDiv);
    }
  });
}

function stringToColor(str) {
  let hash = 0;
  let color = "#";
  let i;
  let value;
  let strLength;

  if (!str) {
    return color + "333333";
  }

  strLength = str.length;

  for (i = 0; i < strLength; i++) {
    hash = str.charCodeAt(i) + ((hash << str[str.length - 1]) - hash);
  }

  for (i = 0; i < 3; i++) {
    value = (hash >> (i * 8)) & 0xff;
    color += ("00" + value.toString(16)).substr(-2);
  }

  return color;
}

timeSlider.addEventListener("input", function () {
  const currentTime = parseInt(this.value);
  clearPaths();
  updatePaths(currentTime);
});

function clearPaths() {
  const agentPathsDivs = document.querySelectorAll(".agent-path");
}

createGrid();
updatePaths(0);
