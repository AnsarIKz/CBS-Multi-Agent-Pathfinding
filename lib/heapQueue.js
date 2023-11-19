export class HeapQueue {
  constructor() {
    this.heap = [];
  }

  heappush(item) {
    this.heap.push(item);
    this._siftdown(0, this.heap.length - 1);
  }

  heappop() {
    const lastelt = this.heap.pop();
    if (this.heap.length > 0) {
      const returnitem = this.heap[0];
      this.heap[0] = lastelt;
      this._siftup(0);
      return returnitem;
    }
    return lastelt;
  }

  heapreplace(item) {
    const returnitem = this.heap[0];
    this.heap[0] = item;
    this._siftup(0);
    return returnitem;
  }

  heappushpop(item) {
    if (this.heap.length > 0 && this.heap[0] < item) {
      [item, this.heap[0]] = [this.heap[0], item];
      this._siftup(0);
    }
    return item;
  }

  heapify() {
    for (let i = Math.floor(this.heap.length / 2) - 1; i >= 0; i--) {
      this._siftup(i);
    }
  }

  _siftdown(startpos, pos) {
    const newitem = this.heap[pos];
    while (pos > startpos) {
      const parentpos = (pos - 1) >> 1;
      const parent = this.heap[parentpos];
      if (newitem < parent) {
        this.heap[pos] = parent;
        pos = parentpos;
        continue;
      }
      break;
    }
    this.heap[pos] = newitem;
  }

  _siftup(pos) {
    const endpos = this.heap.length;
    const startpos = pos;
    const newitem = this.heap[pos];
    let childpos = 2 * pos + 1;

    while (childpos < endpos) {
      const rightpos = childpos + 1;
      if (rightpos < endpos && !(this.heap[childpos] < this.heap[rightpos])) {
        childpos = rightpos;
      }

      this.heap[pos] = this.heap[childpos];
      pos = childpos;
      childpos = 2 * pos + 1;
    }

    this.heap[pos] = newitem;
    this._siftdown(startpos, pos);
  }
}

// Example usage:
const heap = new HeapQueue();
heap.heappush(3);
heap.heappush(1);
heap.heappush(4);
heap.heappush(1);
heap.heappush(5);

console.log(heap.heap); // Output: [1, 1, 4, 3, 5]

const poppedItem = heap.heappop();
console.log(poppedItem); // Output: 1
console.log(heap.heap); // Output: [1, 3, 4, 5]
