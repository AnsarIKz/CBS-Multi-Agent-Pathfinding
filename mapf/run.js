import { generateRandomScenario, mapf } from "./index.js";
import fs from "fs";

let { agentsData, gridMaze } = generateRandomScenario(10, 15);
const startTimer = new Date();
const result = mapf(agentsData, gridMaze);

let resJson = {};
for (const agent in result) {
  resJson[`agent${agent}`] = result[agent].reverse();
  console.log("agent " + agent + ":", result[agent].reverse());
}
console.log(new Date() - startTimer, "ms");
fs.writeFileSync("agentResults.json", JSON.stringify(resJson));
