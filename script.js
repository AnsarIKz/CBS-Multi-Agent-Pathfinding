const gridMaze = [
  [0, 0, 0, 0, 0],
  [1, 0, 0, 0, 1],
  [0, 1, 0, 0, 0],
  [0, 0, 0, 1, 0],
  [0, 0, 0, 0, 0],
];

const agentPaths = {
  agent1: [
    [[0, 0], 0],
    [[0, 1], 1],
    [[1, 1], 2],
    [[1, 2], 3],
    [[1, 3], 4],
    [[2, 3], 5],
    [[2, 4], 6],
    [[3, 4], 7],
    [[4, 4], 8],
  ],
  agent2: [
    [[0, 4], 0],
    [[0, 3], 1],
    [[1, 3], 2],
    [[2, 3], 3],
  ],
  agent3: [
    [[0, 3], 0],
    [[0, 2], 1],
    [[0, 1], 2],
    [[0, 0], 3],
  ],
  agent5: [
    [[2, 3], 0],
    [[2, 2], 1],
    [[3, 2], 2],
    [[4, 2], 3],
    [[4, 3], 4],
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
  agentPathsDivs.forEach((div) => div.remove());
}

createGrid();
updatePaths(0);
