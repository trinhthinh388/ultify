const Index = `import { Stack } from '@ultify/datastructure'

// Create an empty stack
const foo = new Stack()
console.log(foo.toArray())

foo.push(1)
foo.push(2)

console.log(foo.toArray())
`;

export const files = {
  '/index.js': {
    code: Index,
  },
};
