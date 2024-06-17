const Index = `import { MaxHeap } from '@ultify/datastructure'

// Create a MaxHeap
const foo = new MaxHeap([1, 2, 3])

console.log(foo.toArray())
`;

export const files = {
  '/index.js': {
    code: Index,
  },
};
