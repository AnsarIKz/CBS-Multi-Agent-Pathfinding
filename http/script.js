async function onload() {
  let agentPaths = await fetch("http://127.0.0.1:8080/agentResults.json", {
    cache: "no-store",
  }).then((res) => res.json());
  let gridMaze = await fetch("http://127.0.0.1:8080/buildedGrid.json", {
    cache: "no-store",
  }).then((res) => res.json());

  const gridContainer = document.getElementById("grid-container");
  const timeSlider = document.getElementById("time-slider");
  const maxTime = Math.max(
    ...Object.values(agentPaths).flatMap((path) =>
      path.map((point) => point[1])
    )
  );

  function createGrid() {
    for (let i = 0; i < gridMaze.length; i++) {
      for (let j = 0; j < gridMaze[i].length; j++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        if (gridMaze[i][j] === 1) {
          cell.classList.add("stone");
        } else if (gridMaze[i][j] === 2) {
          cell.classList.add("portal");
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
  let maxStep = Math.max(
    ...Object.keys(agentPaths).map((item) => agentPaths[item].length)
  );

  let isStepNow = false;
  async function start() {
    for (let currentStep = 0; currentStep < maxStep - 1; currentStep++) {
      if (!isStepNow) {
        isStepNow = true;
        setTimeout(() => {
          clearPaths();
          updatePaths(currentStep);
          isStepNow = false;
        }, 500);
      }
    }
  }

  function clearPaths() {
    const agentPathsDivs = document.querySelectorAll(".agent-path");
    agentPathsDivs.forEach((div) => div.remove());
  }

  createGrid();
  updatePaths(0);
  start();
}

onload();
