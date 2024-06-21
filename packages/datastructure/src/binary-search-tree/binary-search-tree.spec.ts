import { BinarySearchTree } from './binary-search-tree';

describe('BinarySearchTree', () => {
  describe('Constructor', () => {
    it('Shuold construct a Binary Search Tree', () => {
      const bst = new BinarySearchTree();
      expect(bst).toBeDefined();
      const bst2 = new BinarySearchTree([1, 2, 3]);
      expect([...bst2]).toEqual([3, 2, 1]);
    });
  });
});
