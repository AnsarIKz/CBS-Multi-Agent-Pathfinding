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

  // Initialise MAPF instance
  const grid = gridMaze.map((row) => [...row]);

  // Compute all paths using low-level A* search
  let conflicts = [];
  const allSolutions = {};

  for (const agent in agentsData) {
    const start = agentsData[agent][0];
    const end = agentsData[agent][1];

    let route = aStar(grid, start, end, conflicts, heuristicString);
    route.push(start); // Add start position
    route.reverse(); // Reverse solution

    allSolutions[agent] = route;
  }

  // Create root node
  const root_node = new ConflictNode(conflicts, allSolutions);

  // Compute total cost for all agents
  root_node.computeTotalCost();

  let goalNode = null;
  let currentNode = root_node;

  while (true) {
    // Perform Validation
    const leafNodes = findLeafNodes(root_node);

    // Search for goal node (no conflict)
    goalNode = ctGoalNode(leafNodes, agentCombinations);

    if (goalNode !== null) {
      break;
    }

    // Update current node
    currentNode = getOptimalNode(leafNodes);

    // Find conflicts
    for (const combination of agentCombinations) {
      const agent1 = combination[0];
      const agent2 = combination[1];

      const path1 = currentNode.allSolutions[agent1];
      const path2 = currentNode.allSolutions[agent2];

      conflicts = computeConflicts(agent1, agent2, path1, path2);

      // Resolve conflict for one agent combination
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
          grid,
          heuristicString
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
        updatedSolutions2[agent2] = compute_updated_solution(
          agent2,
          agentPositions2,
          updatedConflicts2,
          grid,
          heuristicString
        );

        currentNode.left = new ConflictNode(
          updatedConflicts2,
          updatedSolutions2
        );
        currentNode.right.computeTotalCost();

        break;
      }
    }
  }

  return goalNode.allSolutions;
}

// Example usage
const agentsData = {
  1: [
    [0, 1],
    [3, 2],
  ],
  2: [
    [1, 0],
    [2, 3],
  ],
  3: [
    [0, 2],
    [1, 2],
  ],
  4: [
    [1, 1],
    [0, 2],
  ],
};

const gridMaze = [
  [0, 0, 0, 0, 0],
  [0, 1, 0, 1, 0],
  [0, 1, 0, 0, 0],
  [0, 0, 0, 1, 0],
  [0, 0, 0, 0, 0],
];

const result = mapf(agentsData, gridMaze);

for (const agent in result) {
  console.log(agent + ":", result[agent]);
}
