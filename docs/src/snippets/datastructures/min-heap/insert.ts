const Index = `import { MinHeap } from '@ultify/datastructure'

// Create an empty MinHeap
const foo = new MinHeap()
foo.insert(1)
foo.insert(2)
foo.insert(67, -7)

console.log(foo.toArray())
`;

export const files = {
  '/index.js': {
    code: Index,
  },
};
