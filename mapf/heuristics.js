export function manhattanHeuristic(a, b) {
  // |x2 - x1| + |y2 - y1|
  let dx = Math.abs(b[0] - a[0]);
  let dy = Math.abs(b[1] - a[1]);
  return dx + dy;
}

export function portalHeuristic(a, b, portals) {
  // Find the nearest portal to point a
  const pa = findNearestPortal(a, portals);

  // Find the nearest portal to point b
  const pb = findNearestPortal(b, portals);

  // Calculate the Manhattan distance between the two nearest portals
  return [
    Math.abs(pa[0] - a[0]) +
      Math.abs(pa[1] - a[1]) +
      Math.abs(pb[0] - b[0]) +
      Math.abs(pb[1] - b[1]),
    [pa, pb],
  ];
}

// Helper function to find the nearest portal to a given point
function findNearestPortal(point, portals) {
  let minDistance = Infinity;
  let nearestPortal = null;

  for (const portal of portals) {
    const distance =
      Math.abs(portal[0] - point[0]) + Math.abs(portal[1] - point[1]);
    if (distance < minDistance) {
      minDistance = distance;
      nearestPortal = portal;
    }
  }

  return nearestPortal;
}

// Helper function to calculate Manhattan distance between two points
