import fs from "fs";
import { aStar } from "./astar.js";
import {
  findLeafNodes,
  ctGoalNode,
  getOptimalNode,
  computeConflicts,
  computeUpdatedSolution,
} from "./conflictTreeFunctions.js";
import { ConflictNode } from "./conflictTree.js";

function mapf(agentsData, gridMaze, heuristicString) {
  const agentsList = Object.keys(agentsData);
  const agentCombinations = [];

  for (let i = 0; i < agentsList.length - 1; i++) {
    for (let j = i + 1; j < agentsList.length; j++) {
      agentCombinations.push([agentsList[i], agentsList[j]]);
    }
  }

  const grid = gridMaze;
  let conflicts = [];
  const allSolutions = {};

  for (const agent in agentsData) {
    const start = agentsData[agent][0];
    const end = agentsData[agent][1];

    let route = aStar(grid, start, end, conflicts, heuristicString);
    if (route == null) {
      route = [[start, -1]];
    }
    route.unshift([start, 0]);
    route.reverse();

    allSolutions[agent] = route;
  }

  const rootNode = new ConflictNode(conflicts, allSolutions);
  rootNode.computeTotalCost();

  let goalNode = null;
  let currentNode = rootNode;

  while (true) {
    const leafNodes = findLeafNodes(rootNode);

    goalNode = ctGoalNode(leafNodes, agentCombinations);

    if (goalNode !== null) {
      break;
    }

    currentNode = getOptimalNode(leafNodes);

    for (const combination of agentCombinations) {
      const agent1 = combination[0];
      const agent2 = combination[1];

      const path1 = currentNode.allSolutions[agent1];
      const path2 = currentNode.allSolutions[agent2];

      conflicts = computeConflicts(agent1, agent2, path1, path2);

      if (conflicts.length !== 0) {
        const currentConflicts = currentNode.conflicts;

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
      }
    }
  }

  return goalNode.allSolutions;
}

// Пример использования
const generateRandomCoordinate = () => Math.floor(Math.random() * 40);

const generateRandomScenario = (numAgents) => {
  const agentsData = {};
  const gridMaze = Array.from({ length: 40 }, () =>
    Array.from({ length: 40 }, () => (Math.random() > 0.8 ? 1 : 0))
  );

  const jsonData = JSON.stringify(gridMaze);
  fs.writeFileSync("buildedGrid.json", jsonData);

  for (let agentId = 1; agentId <= numAgents; agentId++) {
    const startX = generateRandomCoordinate();
    const startY = generateRandomCoordinate();
    let endX, endY;

    do {
      endX = generateRandomCoordinate();
      endY = generateRandomCoordinate();
    } while (
      endX < 0 ||
      endX >= gridMaze.length ||
      endY < 0 ||
      endY >= gridMaze[0].length ||
      gridMaze[endX][endY] === 1
    );

    agentsData[agentId] = [
      [startX, startY],
      [endX, endY],
    ];
  }

  return { agentsData, gridMaze };
};

let { agentsData, gridMaze } = generateRandomScenario(10);
const result = mapf(agentsData, gridMaze, "manhattan");

let resJson = {};
for (const agent in result) {
  resJson[`agent${agent}`] = result[agent].reverse();
  console.log("agent " + agent + ":", result[agent].reverse());
}
fs.writeFileSync("agentResults.json", JSON.stringify(resJson));
