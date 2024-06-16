import { Heap } from './heap';

describe('Heap', () => {
  describe('Constructor', () => {
    it('Should construct a valid heap', () => {
      const heap = new Heap([47, 92, 1, 20, 92, 50, 8, 51, 42, 7, 18, 54]);
      expect(heap.toArray()).toEqual([
        92, 92, 54, 51, 47, 50, 8, 20, 42, 7, 18, 1,
      ]);
      expect(heap.size).toBe(12);
      expect(heap.isValid()).toBe(true);
      expect(heap.root).toBe(92);
    });
    it('Should construct a max heap by default', () => {
      const heap = new Heap([1, 27, 45, 3]);
      expect(heap.toArray()).toEqual([45, 27, 1, 3]);
      expect(heap.isValid()).toBe(true);
      expect(heap.root).toBe(45);
    });
    it('Should construct a min heap', () => {
      const heap = new Heap([45, 27, 1, 3], (a, b) => b - a);
      expect(heap.toArray()).toEqual([1, 3, 45, 27]);
      expect(heap.isValid()).toBe(true);
      expect(heap.root).toBe(1);
    });
  });

  describe('Insert', () => {
    it('Should do nothing if args are not provided', () => {
      const heap = new Heap();
      heap.insert();
      expect(heap.toArray()).toEqual([]);
    });
    it('Should create a valid heap', () => {
      const heap = new Heap();
      heap.insert(45);
      heap.insert(1);
      heap.insert(27);
      heap.insert(3);
      expect(heap.isValid()).toBe(true);
      heap.insert(67, 2);
      expect(heap.toArray()).toEqual([67, 45, 27, 1, 3, 2]);
      expect(heap.isValid()).toBe(true);
    });
  });

  describe('Extract Root', () => {
    it('Should return undefined if heap is empty', () => {
      const heap = new Heap();
      expect(heap.extractRoot()).toBe(undefined);
    });
    it('Should remove the root node and maintain the valid heap.', () => {
      const heap = new Heap([16, 81, 94, 79, 47, 42, 26, 56, 8, 66, 6]);
      expect(heap.toArray()).toEqual([
        94, 81, 42, 79, 66, 16, 26, 56, 8, 47, 6,
      ]);
      expect(heap.isValid()).toBe(true);

      const el = heap.extractRoot();
      expect(el).toBe(94);
      expect(heap.toArray()).toEqual([81, 79, 42, 56, 66, 16, 26, 6, 8, 47]);
    });
  });
});
