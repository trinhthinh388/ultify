const Index = `import { Heap } from '@ultify/datastructure'

// Create an empty Heap
const foo = Heap.fromArray([1, 2, 3])
console.log(foo.toArray())
`;

export const files = {
  '/index.js': {
    code: Index,
  },
};
