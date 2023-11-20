let agentPaths = {
  agent1: [
    [[32, 33], 46],
    [[31, 33], 45],
    [[31, 32], 44],
    [[31, 31], 43],
    [[31, 30], 42],
    [[31, 29], 41],
    [[31, 28], 40],
    [[31, 27], 39],
    [[31, 26], 38],
    [[30, 26], 37],
    [[29, 26], 36],
    [[28, 26], 35],
    [[27, 26], 34],
    [[26, 26], 33],
    [[25, 26], 32],
    [[24, 26], 31],
    [[23, 26], 30],
    [[22, 26], 29],
    [[21, 26], 28],
    [[20, 26], 27],
    [[20, 25], 26],
    [[20, 24], 25],
    [[19, 24], 24],
    [[19, 23], 23],
    [[18, 23], 22],
    [[17, 23], 21],
    [[16, 23], 20],
    [[15, 23], 19],
    [[14, 23], 18],
    [[14, 22], 17],
    [[13, 22], 16],
    [[12, 22], 15],
    [[11, 22], 14],
    [[10, 22], 13],
    [[10, 21], 12],
    [[10, 20], 11],
    [[10, 19], 10],
    [[10, 18], 9],
    [[10, 17], 8],
    [[9, 17], 7],
    [[8, 17], 6],
    [[7, 17], 5],
    [[7, 16], 4],
    [[6, 16], 3],
    [[5, 16], 2],
    [[5, 15], 1],
    [[5, 14], 0],
  ],
  agent2: [
    [[38, 32], 30],
    [[37, 32], 29],
    [[36, 32], 28],
    [[35, 32], 27],
    [[35, 31], 26],
    [[34, 31], 25],
    [[33, 31], 24],
    [[32, 31], 23],
    [[31, 31], 22],
    [[31, 30], 21],
    [[31, 29], 20],
    [[31, 28], 19],
    [[31, 27], 18],
    [[31, 26], 17],
    [[30, 26], 16],
    [[29, 26], 15],
    [[28, 26], 14],
    [[27, 26], 13],
    [[26, 26], 12],
    [[25, 26], 11],
    [[24, 26], 10],
    [[24, 25], 9],
    [[24, 24], 8],
    [[24, 23], 7],
    [[24, 22], 6],
    [[24, 21], 5],
    [[24, 20], 4],
    [[24, 19], 3],
    [[24, 18], 2],
    [[23, 18], 1],
    [[23, 17], 0],
  ],
  agent3: [
    [[3, 28], 24],
    [[3, 27], 23],
    [[3, 26], 22],
    [[3, 25], 21],
    [[4, 25], 20],
    [[5, 25], 19],
    [[6, 25], 18],
    [[7, 25], 17],
    [[8, 25], 16],
    [[9, 25], 15],
    [[10, 25], 14],
    [[10, 24], 13],
    [[11, 24], 12],
    [[12, 24], 11],
    [[13, 24], 10],
    [[13, 25], 9],
    [[13, 26], 8],
    [[14, 26], 7],
    [[15, 26], 6],
    [[16, 26], 5],
    [[17, 26], 4],
    [[17, 27], 3],
    [[18, 27], 2],
    [[19, 27], 1],
    [[20, 27], 0],
  ],
  agent4: [
    [[28, 24], 7],
    [[27, 24], 6],
    [[26, 24], 5],
    [[25, 24], 4],
    [[24, 24], 3],
    [[24, 23], 2],
    [[24, 22], 1],
    [[23, 22], 0],
  ],
  agent5: [
    [[38, 31], 38],
    [[38, 30], 37],
    [[38, 29], 36],
    [[37, 29], 35],
    [[36, 29], 34],
    [[36, 28], 33],
    [[36, 27], 32],
    [[35, 27], 31],
    [[35, 26], 30],
    [[35, 25], 29],
    [[36, 25], 28],
    [[36, 24], 27],
    [[36, 23], 26],
    [[36, 22], 25],
    [[36, 21], 24],
    [[35, 21], 23],
    [[35, 20], 22],
    [[35, 19], 21],
    [[35, 18], 20],
    [[35, 17], 19],
    [[35, 16], 18],
    [[35, 15], 17],
    [[35, 14], 16],
    [[35, 13], 15],
    [[35, 12], 14],
    [[36, 12], 13],
    [[37, 12], 12],
    [[37, 11], 11],
    [[37, 10], 10],
    [[37, 9], 9],
    [[37, 8], 8],
    [[37, 7], 7],
    [[37, 6], 6],
    [[38, 6], 5],
    [[38, 5], 4],
    [[38, 4], 3],
    [[38, 3], 2],
    [[38, 2], 1],
    [[39, 2], 0],
  ],
  agent6: [
    [[29, 3], 49],
    [[28, 3], 48],
    [[27, 3], 47],
    [[26, 3], 46],
    [[26, 4], 45],
    [[25, 4], 44],
    [[24, 4], 43],
    [[23, 4], 42],
    [[22, 4], 41],
    [[21, 4], 40],
    [[20, 4], 39],
    [[19, 4], 38],
    [[18, 4], 37],
    [[17, 4], 36],
    [[16, 4], 35],
    [[15, 4], 34],
    [[15, 5], 33],
    [[15, 6], 32],
    [[14, 6], 31],
    [[14, 7], 30],
    [[13, 7], 29],
    [[12, 7], 28],
    [[11, 7], 27],
    [[11, 8], 26],
    [[11, 9], 25],
    [[10, 9], 24],
    [[10, 10], 23],
    [[10, 11], 22],
    [[9, 11], 21],
    [[8, 11], 20],
    [[8, 12], 19],
    [[7, 12], 18],
    [[6, 12], 17],
    [[5, 12], 16],
    [[4, 12], 15],
    [[4, 13], 14],
    [[4, 14], 13],
    [[3, 14], 12],
    [[2, 14], 11],
    [[2, 15], 10],
    [[2, 16], 9],
    [[1, 16], 8],
    [[0, 16], 7],
    [[0, 17], 6],
    [[0, 18], 5],
    [[0, 19], 4],
    [[0, 20], 3],
    [[0, 21], 2],
    [[0, 22], 1],
    [[0, 23], 0],
  ],
  agent7: [
    [[7, 12], 26],
    [[8, 12], 25],
    [[9, 12], 24],
    [[10, 12], 23],
    [[11, 12], 22],
    [[12, 12], 21],
    [[13, 12], 20],
    [[14, 12], 19],
    [[14, 11], 18],
    [[15, 11], 17],
    [[16, 11], 16],
    [[17, 11], 15],
    [[18, 11], 14],
    [[19, 11], 13],
    [[20, 11], 12],
    [[21, 11], 11],
    [[22, 11], 10],
    [[23, 11], 9],
    [[24, 11], 8],
    [[24, 12], 7],
    [[25, 12], 6],
    [[26, 12], 5],
    [[27, 12], 4],
    [[27, 11], 3],
    [[27, 10], 2],
    [[28, 10], 1],
    [[29, 10], 0],
  ],
  agent8: [
    [[27, 10], 14],
    [[27, 9], 13],
    [[27, 8], 12],
    [[27, 7], 11],
    [[28, 7], 10],
    [[29, 7], 9],
    [[30, 7], 8],
    [[31, 7], 7],
    [[31, 6], 6],
    [[31, 5], 5],
    [[31, 4], 4],
    [[32, 4], 3],
    [[33, 4], 2],
    [[34, 4], 1],
    [[34, 3], 0],
  ],
  agent9: [
    [[25, 33], 53],
    [[24, 33], 52],
    [[24, 32], 51],
    [[24, 31], 50],
    [[23, 31], 49],
    [[23, 30], 48],
    [[23, 29], 47],
    [[23, 28], 46],
    [[23, 27], 45],
    [[24, 27], 44],
    [[24, 26], 43],
    [[24, 25], 42],
    [[24, 24], 41],
    [[24, 23], 40],
    [[24, 22], 39],
    [[24, 21], 38],
    [[24, 20], 37],
    [[24, 19], 36],
    [[24, 18], 35],
    [[23, 18], 34],
    [[23, 17], 33],
    [[23, 16], 32],
    [[23, 15], 31],
    [[23, 14], 30],
    [[23, 13], 29],
    [[22, 13], 28],
    [[22, 12], 27],
    [[22, 11], 26],
    [[22, 10], 25],
    [[22, 9], 24],
    [[22, 8], 23],
    [[22, 7], 22],
    [[21, 7], 21],
    [[20, 7], 20],
    [[19, 7], 19],
    [[19, 6], 18],
    [[19, 5], 17],
    [[18, 5], 16],
    [[17, 5], 15],
    [[16, 5], 14],
    [[15, 5], 13],
    [[15, 4], 12],
    [[15, 3], 11],
    [[14, 3], 10],
    [[13, 3], 9],
    [[12, 3], 8],
    [[12, 2], 7],
    [[11, 2], 6],
    [[10, 2], 5],
    [[10, 3], 4],
    [[10, 4], 3],
    [[10, 5], 2],
    [[9, 5], 1],
    [[8, 5], 0],
  ],
  agent10: [
    [[38, 1], 51],
    [[37, 1], 50],
    [[37, 2], 49],
    [[36, 2], 48],
    [[35, 2], 47],
    [[34, 2], 46],
    [[34, 3], 45],
    [[34, 4], 44],
    [[33, 4], 43],
    [[32, 4], 42],
    [[31, 4], 41],
    [[31, 5], 40],
    [[31, 6], 39],
    [[31, 7], 38],
    [[30, 7], 37],
    [[29, 7], 36],
    [[28, 7], 35],
    [[27, 7], 34],
    [[26, 7], 33],
    [[25, 7], 32],
    [[24, 7], 31],
    [[23, 7], 30],
    [[22, 7], 29],
    [[21, 7], 28],
    [[20, 7], 27],
    [[20, 8], 26],
    [[20, 9], 25],
    [[19, 9], 24],
    [[18, 9], 23],
    [[17, 9], 22],
    [[17, 10], 21],
    [[16, 10], 20],
    [[15, 10], 19],
    [[15, 11], 18],
    [[15, 12], 17],
    [[15, 13], 16],
    [[15, 14], 15],
    [[15, 15], 14],
    [[15, 16], 13],
    [[15, 17], 12],
    [[15, 18], 11],
    [[14, 18], 10],
    [[14, 19], 9],
    [[14, 20], 8],
    [[14, 21], 7],
    [[14, 22], 6],
    [[14, 23], 5],
    [[14, 24], 4],
    [[13, 24], 3],
    [[13, 25], 2],
    [[13, 26], 1],
    [[13, 27], 0],
  ],
};
let gridMaze = [
  [
    0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0,
  ],
  [
    0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0,
    1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0,
  ],
  [
    0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0,
  ],
  [
    0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ],
  [
    1, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0,
    0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ],
  [
    1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0,
  ],
  [
    0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0,
    0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1,
  ],
  [
    0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0,
  ],
  [
    1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1,
  ],
  [
    0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0,
  ],
  [
    0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1,
  ],
  [
    0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0,
    0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0,
  ],
  [
    0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    1, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1,
  ],
  [
    1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0,
    0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0,
  ],
  [
    0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0,
  ],
  [
    0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1,
  ],
  [
    0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0,
    1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0,
  ],
  [
    0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0,
  ],
  [
    0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1,
    0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0,
  ],
  [
    0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0,
  ],
  [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0,
    0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0,
  ],
  [
    0, 1, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0,
    1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0,
  ],
  [
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0,
    0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0,
  ],
  [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1,
    0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1,
  ],
  [
    0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1,
  ],
  [
    1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 1, 0,
    0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0,
  ],
  [
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0,
  ],
  [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0,
    0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0,
  ],
  [
    0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0,
    0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 0, 0, 0, 1, 1,
  ],
  [
    0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0,
    0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ],
  [
    0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0,
    0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0,
  ],
  [
    0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
  ],
  [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ],
  [
    1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0,
    0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0,
  ],
  [
    1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 1, 0, 0, 1, 0,
    0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0,
  ],
  [
    0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0,
    0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ],
  [
    0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ],
  [
    0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0,
    0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0,
  ],
  [
    0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0,
    0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0,
  ],
  [
    1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0,
    0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 0, 0, 1,
  ],
];
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
