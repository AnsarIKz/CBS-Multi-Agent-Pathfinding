import { aStar } from "./astar.js";
import { manhattanHeuristic, portalHeuristic } from "./heuristics.js";
import { findPortals, mergePath } from "./utils.js";

function getCoordsAtTimestamp(mask, timestamp) {
  console.log(mask, timestamp);
  for (const [coords, t] of mask) {
    if (t === timestamp) {
      return coords;
    }
  }
  return null; // Значения координат не найдены для указанного timestamp
}

export function computeConflicts(agent1, agent2, path1, path2) {
  const conflicts = [];
  const minLength = Math.min(path1.length, path2.length) - 1;

  for (let timestamp = 0; timestamp < minLength; timestamp++) {
    let position1 = getCoordsAtTimestamp(path1, timestamp);
    let position2 = getCoordsAtTimestamp(path2, timestamp);

    if (position1.toString() == position2.toString()) {
      conflicts.push([agent1, position1, timestamp, "position"]);
      conflicts.push([agent2, position1, timestamp, "position"]);
      return conflicts;
    }
  }

  for (let timestamp = 0; timestamp < minLength; timestamp++) {
    const agent1Position1 = getCoordsAtTimestamp(path1, timestamp);
    const agent1Position2 = getCoordsAtTimestamp(path1, timestamp + 1);

    const agent2Position1 = getCoordsAtTimestamp(path2, timestamp);
    const agent2Position2 = getCoordsAtTimestamp(path2, timestamp + 1);

    if (
      agent1Position1.toString() == agent2Position2.toString() &&
      agent1Position2.toString() == agent2Position1.toString()
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

  return conflicts;
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

export function ctGoalNode(leafNodes, agentCombinations) {
  let goalNodes = [];

  for (let node of leafNodes) {
    let conflictsFlag = false;
    for (let combination of agentCombinations) {
      let agent1 = combination[0];
      let agent2 = combination[1];

      let path1 = node.allSolutions[agent1];
      let path2 = node.allSolutions[agent2];

      const conflicts = computeConflicts(agent1, agent2, path1, path2);

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
    let goalNode = getOptimalNode(goalNodes);
    return goalNode;
  }
}

export function getOptimalNode(leafNodes) {
  leafNodes.sort((a, b) => a.totalCost - b.totalCost);

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

function filterConflicts(conflicts, agent) {
  const agentConflicts = [];

  for (const conflict of conflicts) {
    if (conflict[0] === agent) {
      agentConflicts.push(conflict);
    }
  }

  return agentConflicts;
}

export function computeUpdatedSolution(
  agent,
  agentPositions,
  conflicts,
  gridMaze
) {
  const start = agentPositions[0];
  const end = agentPositions[1];
  const agentConflicts = filterConflicts(conflicts, agent);
  let path;

  const portalList = findPortals(gridMaze);

  let [resPortalHeuristic, portal] = portalHeuristic(start, end, portalList);
  let resManhattanHeuristic = manhattanHeuristic(start, end);

  if (resPortalHeuristic < resManhattanHeuristic) {
    console.log(resPortalHeuristic, resManhattanHeuristic, start);
    let res1 = aStar(gridMaze, start, portal[0], conflicts);
    let res2 = aStar(gridMaze, portal[1], end, conflicts);

    path = mergePath(res1, res2);
  }
  if (resPortalHeuristic >= resManhattanHeuristic || path?.length == 0) {
    path = aStar(gridMaze, start, end, conflicts);
  }

  path = aStar(gridMaze, start, end, agentConflicts);
  if (path == null) {
    path = [start];
  } else {
    path.unshift([start, 0]);
  }

  path.reverse();

  return path;
}
