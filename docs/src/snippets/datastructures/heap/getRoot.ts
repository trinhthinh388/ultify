const Index = `import { Heap } from '@ultify/datastructure'

// Create an empty Heap
const foo = new Heap()
foo.insert(1)
foo.insert(2)
foo.insert(67, -7)

console.log(foo.root)
console.log(foo.toArray())
`;

export const files = {
  '/index.js': {
    code: Index,
  },
};
