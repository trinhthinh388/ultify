const Index = `import { Queue } from '@ultify/datastructure'

// Create an empty stack
const foo = new Queue()
console.log("Empty queue:", foo.toArray())

// Create a queue with pre-filled values
const bar = new Queue(1, 2, 3, 4)
console.log("Pre-filled queue:", bar.toArray())`;

export const files = {
  '/index.js': {
    code: Index,
  },
};
