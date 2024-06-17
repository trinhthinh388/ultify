const Index = `import { MaxHeap } from '@ultify/datastructure'

// Create an empty heap
const foo = new MaxHeap()
console.log("Empty MaxHeap:", foo.toArray())

// Create a heap from an array
const bar = new MaxHeap([3, 7, 5, 9])
console.log("Max MaxHeap:", bar.toArray())
`;

export const files = {
  '/index.js': {
    code: Index,
  },
};
