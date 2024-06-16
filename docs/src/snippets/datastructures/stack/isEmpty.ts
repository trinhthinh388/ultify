const Index = `import { Stack } from '@ultify/datastructure'

// Create an empty Stack
const foo = new Stack(0, 1, 2, 3)
console.log(foo.size)

console.log(foo.isEmpty())
`;

export const files = {
  '/index.js': {
    code: Index,
  },
};
