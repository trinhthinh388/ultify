const Index = `import { Trie } from '@ultify/datastructure'

// Create a Trie
const foo = Trie.fromArray(['foo', 'bar'])
console.log(foo.toArray())
`;

export const files = {
  '/index.js': {
    code: Index,
  },
};
