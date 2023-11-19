import { aStar } from "./astar.js";
export function computeConflicts(agent1, agent2, path1, path2) {
  const conflicts = [];
  const minLength = Math.min(path1.length, path2.length) - 1;

  // Check conflicts at each timestamp
  for (let timestamp = 0; timestamp < minLength; timestamp++) {
    const position1 = path1[timestamp];
    const position2 = path2[timestamp];

    // Conflict found
    if (position1.toString() === position2.toString()) {
      conflicts.push([agent1, position1, timestamp, "position"]);
      conflicts.push([agent2, position1, timestamp, "position"]);

      return conflicts;
    }
  }

  // Compute edge conflicts (a-b-c-d, g-e-d-c-x: conflict at c-d/d-c)
  for (let timestamp = 0; timestamp < minLength - 1; timestamp++) {
    const agent1Position1 = path1[timestamp]; // c
    const agent1Position2 = path1[timestamp + 1]; // d

    const agent2Position1 = path2[timestamp]; // d
    const agent2Position2 = path2[timestamp + 1]; // c

    // Edge conflict found
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

// Perform CT Validation: find goal node with no conflicts
export function ctGoalNode(leafNodes, agentCombinations) {
  const goalNodes = [];
  let conflicts = [];
  let conflictsFlag = false;

  for (const node of leafNodes) {
    for (const combination of agentCombinations) {
      const agent1 = combination[0];
      const agent2 = combination[1];

      const path1 = node.allSolutions[agent1];
      const path2 = node.allSolutions[agent2];

      conflicts = computeConflicts(agent1, agent2, path1, path2);
      if (conflicts.length !== 0) {
        conflictsFlag = true;
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

export function getOptimalNode(leafNodes) {
  leafNodes.sort((a, b) => a.totalCost - b.totalCost);

  // Break ties with CAT (conflict avoidance table)
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

// Get conflicts for a given agent only
function filterConflicts(conflicts, agent) {
  const agentConflicts = [];

  // Iterate through all conflicts
  for (const conflict of conflicts) {
    // Update grid if conflict for given agent
    if (conflict[0] === agent) {
      agentConflicts.push(conflict);
    }
  }

  return agentConflicts;
}

// Compute solution for an agent given new constraints
// Compute solution for an agent given new constraints
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
    path = [[["No Possibility"], -1]];
  } else {
    // Check for conflicts and adjust the path
    for (const conflict of agentConflicts) {
      const timestamp = conflict[2];
      const conflictingPosition = conflict[1];

      // Remove conflicting positions and add the adjusted path
      path = path.filter(
        ([position, t]) =>
          t < timestamp ||
          position.toString() !== conflictingPosition.toString()
      );
      path.unshift([start, 0]); // Add start position
      path.reverse(); // Reverse solution
    }
  }

  return path;
}
