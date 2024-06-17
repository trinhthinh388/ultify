const Index = `import { MaxHeap } from '@ultify/datastructure'

// Create an empty Heap
const foo = new MaxHeap()
foo.insert(1)
foo.insert(2)
foo.insert(67, -7)

console.log(foo.max)
console.log(foo.toArray())
`;

export const files = {
  '/index.js': {
    code: Index,
  },
};
