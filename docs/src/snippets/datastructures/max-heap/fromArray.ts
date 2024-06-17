const Index = `import { MaxHeap } from '@ultify/datastructure'

// Create an empty MaxHeap
const foo = MaxHeap.fromArray([1, 2, 3])
console.log(foo.toArray())
`;

export const files = {
  '/index.js': {
    code: Index,
  },
};
