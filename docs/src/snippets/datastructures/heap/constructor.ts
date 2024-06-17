const Index = `import { Heap } from '@ultify/datastructure'

// Create an empty heap
const foo = new Heap()
console.log("Empty Heap:", foo.toArray())

// Create a heap from an array
const bar = new Heap([3, 7, 5, 9])
console.log("Max Heap:", bar.toArray())

// Create a min heap from an array
const min = new Heap([3, 7, 5, 9], (a, b) => b - a)
console.log("Min Heap:", min.toArray())
`;

export const files = {
  '/index.js': {
    code: Index,
  },
};
