const Index = `import { Stack } from '@ultify/datastructure'

// Create an empty stack
const foo = new Stack(1, 2, 3)

console.log(foo.toArray())
`;

export const files = {
  '/index.js': {
    code: Index,
  },
};
