export function findPortals(matrix) {
  const coordinates = [];

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 2) {
        coordinates.push([i, j]);
      }
    }
  }

  return coordinates;
}

export function mergePath(p1, p2) {
  if (!(p1?.length && p2?.length)) {
    return [];
  }

  p2.forEach((element, i, arr) => (arr[i][1] += p1[p1.length - 1][1]));
  return [...p1, ...p2];
}
