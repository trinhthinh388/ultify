const Index = `import { Trie } from '@ultify/datastructure'

// Create an empty heap
const foo = new Trie()
console.log("Empty Trie:", foo.toArray())

// Create a trie from an array
const bar = new Trie('foo', 'bar')
console.log("Trie:", bar.toArray())
`;

export const files = {
  '/index.js': {
    code: Index,
  },
};
