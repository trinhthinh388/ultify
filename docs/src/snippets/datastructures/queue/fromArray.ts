const Index = `import { Queue } from '@ultify/datastructure'

// Create an empty Queue
const foo = Queue.fromArray([1, 2, 3])
console.log(foo.toArray())
`;

export const files = {
  '/index.js': {
    code: Index,
  },
};
