const Index = `import { Queue } from '@ultify/datastructure'

// Create an empty Queue
const foo = new Queue(0, 1, 2, 3)
console.log(foo.size)
`;

export const files = {
  '/index.js': {
    code: Index,
  },
};
