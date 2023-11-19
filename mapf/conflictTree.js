export class ConflictNode {
  constructor(conflicts = [], allSolutions = {}) {
    this.conflicts = conflicts; // (agent, position, timestamp)
    this.allSolutions = allSolutions; // optimal paths for all agents {agent: path}
    this.totalCost = 0; // total cost of optimal paths for all agents (F score): 1 for move/wait

    this.left = null;
    this.right = null;
  }

  computeTotalCost() {
    for (const agent in this.allSolutions) {
      const solution = this.allSolutions[agent];
      const cost = solution.length - 1;
      this.totalCost += cost;
    }

    return this.totalCost;
  }
}
