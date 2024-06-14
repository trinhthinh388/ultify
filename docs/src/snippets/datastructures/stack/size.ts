const Index = `import { Stack } from '@ultify/datastructure'

// Create an empty stack
const foo = new Stack(0, 1, 2, 3)
console.log(foo.size)

foo.push(4)
console.log(foo.size)
`;

export const files = {
  '/index.js': {
    code: Index,
  },
};
