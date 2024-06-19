const Index = `import { Trie } from '@ultify/datastructure'

// Create a Trie
const foo = new Trie('foo', 'bar')

console.log(foo.wordCount)
`;

export const files = {
  '/index.js': {
    code: Index,
  },
};
