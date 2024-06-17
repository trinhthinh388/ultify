const Index = `import { MinHeap } from '@ultify/datastructure'

// Create an empty heap
const foo = new MinHeap()
console.log("Empty MinHeap:", foo.toArray())

// Create a heap from an array
const bar = new MinHeap([3, 7, 5, 9])
console.log("Max MinHeap:", bar.toArray())
`;

export const files = {
  '/index.js': {
    code: Index,
  },
};
