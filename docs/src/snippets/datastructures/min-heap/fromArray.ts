const Index = `import { MinHeap } from '@ultify/datastructure'

// Create an empty MinHeap
const foo = MinHeap.fromArray([1, 2, 3])
console.log(foo.toArray())
`;

export const files = {
  '/index.js': {
    code: Index,
  },
};
