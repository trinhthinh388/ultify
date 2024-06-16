const Index = `import { Queue } from '@ultify/datastructure'

// Create an empty Queue
const foo = new Queue()
foo.enqueue(1)
foo.enqueue(2)

console.log(foo.toArray())
`;

export const files = {
  '/index.js': {
    code: Index,
  },
};
