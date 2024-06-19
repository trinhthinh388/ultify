const Index = `import { Trie } from '@ultify/datastructure'

// Create an empty trie
const foo = new Trie()

foo.insert('foo')
foo.insert('bar')

console.log(foo.toArray())

foo.remove('bar')

console.log(foo.toArray())
`;

export const files = {
  '/index.js': {
    code: Index,
  },
};
