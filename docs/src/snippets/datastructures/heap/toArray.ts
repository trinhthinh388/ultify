const Index = `import { Heap } from '@ultify/datastructure'

// Create a Heap
const foo = new Heap([1, 2, 3])

console.log(foo.toArray())
`;

export const files = {
  '/index.js': {
    code: Index,
  },
};
