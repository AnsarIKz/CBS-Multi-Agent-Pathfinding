import { mapf } from "./index.js";

// Function to generate a random coordinate within a range
const generateRandomCoordinate = (max) => Math.floor(Math.random() * max);

// Function to generate a random scenario
const generateRandomScenario = (numAgents, matrix) => {
  const agentsData = {};
  const gridMaze = Array.from({ length: matrix }, () =>
    Array.from({ length: matrix }, () =>
      Math.random() > 0.8 ? (Math.random() > 0.2 ? 1 : 2) : 0
    )
  );

  for (let agentId = 1; agentId <= numAgents; agentId++) {
    const startX = generateRandomCoordinate(matrix);
    const startY = generateRandomCoordinate(matrix);
    let endX, endY;

    do {
      endX = generateRandomCoordinate(matrix); // Provide the matrix argument
      endY = generateRandomCoordinate(matrix); // Provide the matrix argument
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

// Function to run the mapf function and measure time
const runMapf = (agentsData, gridMaze) => {
  const startTime = performance.now();
  const result = mapf(agentsData, gridMaze);
  const endTime = performance.now();
  const executionTime = endTime - startTime;
  console.log(
    `Matrix ${gridMaze.length}x${
      gridMaze[0].length
    }; Count of agents - ${Object.keys(agentsData)}`
  );
  console.log(`Execution time: ${executionTime} milliseconds`);
  return result;
};

// Function to create and run tests
const runTests = () => {
  // Test 1: Random scenario with 50 agents
  let { agentsData, gridMaze } = generateRandomScenario(5, 10);
  console.log("Test 1:");
  runMapf(agentsData, gridMaze);

  // Test 2: Another scenario with different matrix size and agent count
  // Modify the generateRandomScenario function as needed for different scenarios

  let { agentsData: agentsData1, gridMaze: gridMaze1 } = generateRandomScenario(
    10,
    20
  );
  console.log("Test 2:");
  runMapf(agentsData1, gridMaze1);

  let { agentsData: agentsData2, gridMaze: gridMaze2 } = generateRandomScenario(
    15,
    30
  );
  console.log("Test 3:");
  runMapf(agentsData2, gridMaze2);

  let { agentsData: agentsData3, gridMaze: gridMaze3 } = generateRandomScenario(
    30,
    100
  );
  console.log("Test 4:");
  runMapf(agentsData3, gridMaze3);

  // ... Add more tests as needed
};

// Run the tests
runTests();
