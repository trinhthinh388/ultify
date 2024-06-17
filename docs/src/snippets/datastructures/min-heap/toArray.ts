const Index = `import { MinHeap } from '@ultify/datastructure'

// Create a MinHeap
const foo = new MinHeap([1, 2, 3])

console.log(foo.toArray())
`;

export const files = {
  '/index.js': {
    code: Index,
  },
};
