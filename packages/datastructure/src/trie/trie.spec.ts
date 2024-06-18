import { Trie } from './trie';

describe('Trie', () => {
  describe('constructor', () => {
    it('Should construct a trie', () => {
      const trie = new Trie();
      trie
        .insert('abc')
        .insert('xyz')
        .insert('foo')
        .insert('bar')
        .insert('atmosphere');
      expect(trie.nodeCount).toBe(22);
      expect(trie.wordCount).toBe(5);
    });

    it('Should construct a trie', () => {
      const trie = new Trie('abc', 'xyz', 'foo', 'bar');
      expect(trie.nodeCount).toBe(13);
      expect(trie.wordCount).toBe(4);
    });

    it('Should construct a trie', () => {
      const trie = Trie.fromArray(['abc', 'xyz', 'foo', 'bar']);
      expect(trie.nodeCount).toBe(13);
      expect(trie.wordCount).toBe(4);
    });
  });

  describe('Search', () => {
    it('Should work correctly', () => {
      const trie = new Trie();
      trie
        .insert('abc')
        .insert('xyz')
        .insert('foo')
        .insert('bar')
        .insert('atmosphere');
      expect(trie.has('abc')).toBe(true);
      expect(trie.has('bar')).toBe(true);
      expect(trie.has('atmosphere')).toBe(true);
      expect(trie.has('gy')).toBe(false);
      expect(trie.has('atmospher')).toBe(false);
    });
  });

  describe('Starts with', () => {
    it('Should work correctly', () => {
      const trie = new Trie();
      trie
        .insert('abc')
        .insert('xyz')
        .insert('foo')
        .insert('bar')
        .insert('atmosphere');
      expect(trie.startsWith('abc')).toBe(true);
      expect(trie.startsWith('bar')).toBe(true);
      expect(trie.startsWith('gy')).toBe(false);
      expect(trie.startsWith('atmospher')).toBe(true);
    });
  });

  describe('Iteration', () => {
    it('Should be iterable', () => {
      const trie = new Trie();
      trie
        .insert('abc')
        .insert('xyz')
        .insert('foo')
        .insert('bar')
        .insert('atmosphere');
      expect([...trie]).toContain('abc');
      expect([...trie]).toContain('xyz');
      expect([...trie]).toContain('foo');
      expect([...trie]).toContain('bar');
      expect([...trie]).toContain('atmosphere');
    });

    it('toArray should return new array', () => {
      const trie = new Trie();
      trie
        .insert('abc')
        .insert('xyz')
        .insert('foo')
        .insert('bar')
        .insert('atmosphere');
      expect(Array.isArray(trie.toArray())).toBe(true);
    });
  });

  describe('Remove', () => {
    it('Should work correctly', () => {
      const trie = new Trie();
      trie
        .insert('abc')
        .insert('xyz')
        .insert('foo')
        .insert('bar')
        .insert('atmosphere');
      trie.remove('atmosphere');
      expect([...trie]).toContain('abc');
      expect([...trie]).toContain('xyz');
      expect([...trie]).toContain('foo');
      expect([...trie]).toContain('bar');
      expect([...trie]).not.toContain('atmosphere');
      expect(trie.nodeCount).toBe(13);
      expect(trie.wordCount).toBe(4);

      trie.remove('b');
      expect([...trie]).toContain('abc');
      expect([...trie]).toContain('xyz');
      expect([...trie]).toContain('foo');
      expect([...trie]).toContain('bar');
      expect(trie.nodeCount).toBe(13);
      expect(trie.wordCount).toBe(4);

      trie.remove('k');
      expect([...trie]).toContain('abc');
      expect([...trie]).toContain('xyz');
      expect([...trie]).toContain('foo');
      expect([...trie]).toContain('bar');
      expect(trie.nodeCount).toBe(13);
      expect(trie.wordCount).toBe(4);
    });
  });

  describe('Clear', () => {
    it('Should clear all nodes', () => {
      const trie = new Trie('abc', 'xyz', 'foo', 'bar');
      expect(trie.nodeCount).toBe(13);
      expect(trie.wordCount).toBe(4);
      trie.clear();
      expect(trie.nodeCount).toBe(1);
      expect(trie.wordCount).toBe(0);
    });
  });
});
