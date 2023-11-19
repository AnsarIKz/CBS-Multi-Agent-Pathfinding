export function manhattanHeuristic(a, b) {
  // |x2 - x1| + |y2 - y1|
  let dx = Math.abs(b[0] - a[0]);
  let dy = Math.abs(b[1] - a[1]);
  return dx + dy;
}

export function portalHeuristic(a, b, portals) {}
