const Index = `import { Stack } from '@ultify/datastructure'

// Create an empty stack
const foo = new Stack()
console.log("Empty stack:", foo.toArray())

// Create a stack with pre-filled values
const bar = new Stack(1, 2, 3, 4)
console.log("Pre-filled stack:", bar.toArray())`;

export const files = {
  '/index.js': {
    code: Index,
  },
};
