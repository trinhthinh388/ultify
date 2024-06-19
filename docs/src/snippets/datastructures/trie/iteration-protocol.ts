const Index = `import { Trie } from '@ultify/datastructure'

// Create a Trie
const foo = new Trie('foo', 'bar')

for (const word of foo) {
  console.log(word)
}
`;

export const files = {
  '/index.js': {
    code: Index,
  },
};
