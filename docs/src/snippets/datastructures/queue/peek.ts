const Index = `import { Queue } from '@ultify/datastructure'

// Create an empty Queue
const foo = new Queue(1, 2)

console.log("Peek:", foo.peek())
`;

export const files = {
  '/index.js': {
    code: Index,
  },
};
