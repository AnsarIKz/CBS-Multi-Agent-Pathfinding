import { aStar } from "./astar.js";
import {
  findLeafNodes,
  ctGoalNode,
  getOptimalNode,
  computeConflicts,
  computeUpdatedSolution,
} from "./conflictTreeFunctions.js";
import { ConflictNode } from "./conflictTree.js";

function mapf(agentsData, gridMaze) {
  // Получение всех ключей агентов.. [1-n]
  const agentsList = Object.keys(agentsData);
  const agentCombinations = [];

  // Комбинируем все возможные вариации агентов
  for (let i = 0; i < agentsList.length - 1; i++) {
    for (let j = i + 1; j < agentsList.length; j++) {
      agentCombinations.push([agentsList[i], agentsList[j]]);
    }
  }

  const grid = gridMaze;

  // Compute all paths using low-level A* search
  let conflicts = [];
  const allSolutions = {};

  for (const agent in agentsData) {
    // Определяем всех агентов, и узнаём их начальные точки, и точки стремления
    const start = agentsData[agent][0];
    const end = agentsData[agent][1];

    let route = aStar(grid, start, end, conflicts);
    if (route == null) {
      route = [[["No Possibility"], -1]];
    }
    route.unshift([start, 0]); // Add start position
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

        // Break the loop to update conflicts for all agent combinations
        // Comment out the break statement if you want to consider conflicts for all agent combinations
        break;
      }
    }
  }

  return goalNode.allSolutions;
}

// Example usage
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
    [0, 2],
    [0, 0],
  ],
  4: [
    [0, 3],
    [4, 3],
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
