const Index = `import { Queue } from '@ultify/datastructure'

// Create an empty Queue
const foo = new Queue(1, 2, 3)

foo.clear()

console.log(foo.toArray())
`;

export const files = {
  '/index.js': {
    code: Index,
  },
};
