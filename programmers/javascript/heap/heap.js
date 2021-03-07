class MaxHeap {
    constructor() {
        this.array = [-1];
        this.root = 1;
    }

    getParent(idx){
        return Math.floor(idx/2);
    }

    getLeftChild(idx){
        return idx*2;
    }

    getRightChild(idx){
        return idx*2+1;
    }

    printCurrent(){
        console.log(this.array);
    }

    push(number){
        this.array.push(number);
        let lastIdx = this.array.length-1;
        while(true){
            const parent = this.getParent(lastIdx);
            if (parent < this.root){
                break;
            }
            const currentValue = this.array[lastIdx];
            const parentValue = this.array[parent];
            if (parentValue < currentValue){
                this.array[parent] = currentValue;
                this.array[lastIdx] = parentValue;
                lastIdx = parent;
            } else {
                break;
            }
        }
    }

    pop(){
        if (this.array.length === 1) {
            return -1;
        }
        const max = this.array[this.root];
        const lastValue = this.array[this.array.length-1];
        this.array[this.root] = lastValue;
        this.array.pop();
        let currentIdx = this.root;
        while(true){
            const leftChild = this.getLeftChild(currentIdx);
            const rightChild = this.getRightChild(currentIdx);
            if (this.array[leftChild] > this.array[currentIdx]){
                let temp = this.array[leftChild];
                this.array[leftChild] = this.array[currentIdx];
                this.array[currentIdx] = temp;
                currentIdx = leftChild;
            } else if (this.array[rightChild] > this.array[currentIdx]){
                let temp = this.array[rightChild];
                this.array[rightChild] = this.array[currentIdx];
                this.array[currentIdx] = temp;
                currentIdx = rightChild;
            } else {
                break;
            }
        }
        return max;
    }
}

// class PriorityQueue {
//     constructor() {
//       this.queue = [];
//     }
  
//     push(value) {
//       this.queue.push(value);
  
//       let cur = this.queue.length - 1;
//       while (cur > 0) {
//         const parent = Math.floor((cur - 1) / 2);
  
//         if (this.queue[cur] > this.queue[parent]) {
//           const temp = this.queue[cur];
//           this.queue[cur] = this.queue[parent];
//           this.queue[parent] = temp;
  
//           cur = parent;
//         } else {
//           break;
//         }
//       }
//     }
  
//     pop() {
//       const root = this.queue[0];
//       this.queue[0] = this.queue.pop();
  
//       let cur = 0;
//       while (cur < this.queue.length) {
//         const leftChild = cur * 2 + 1;
//         const rightChild = cur * 2 + 2;
  
//         if (
//           this.queue[leftChild] < this.queue[rightChild] &&
//           this.queue[cur] < this.queue[rightChild]
//         ) {
//           const temp = this.queue[cur];
//           this.queue[cur] = this.queue[rightChild];
//           this.queue[rightChild] = temp;
  
//           cur = rightChild;
//         } else if (
//           this.queue[leftChild] > this.queue[rightChild] &&
//           this.queue[cur] < this.queue[leftChild]
//         ) {
//           const temp = this.queue[cur];
//           this.queue[cur] = this.queue[leftChild];
//           this.queue[leftChild] = temp;
  
//           cur = leftChild;
//         } else {
//           break;
//         }
//       }
  
//       return root;
//     }
//   }
  
//   const priorityQueue = new PriorityQueue();
  
//   priorityQueue.push(5);
//   priorityQueue.push(12);
//   priorityQueue.push(17);
//   priorityQueue.push(9);
  
//   console.log(priorityQueue.pop());
//   console.log(priorityQueue.pop());
//   console.log(priorityQueue.pop());
//   console.log(priorityQueue.pop());
//   console.log(priorityQueue.pop());

const heap = new MaxHeap();
heap.push(12);
heap.printCurrent();
heap.push(6);
heap.printCurrent();
heap.push(20);
heap.printCurrent();

var max = heap.pop();
console.log(max);
heap.printCurrent();
var max = heap.pop();
console.log(max);
heap.printCurrent();
var max = heap.pop();
console.log(max);
heap.printCurrent();