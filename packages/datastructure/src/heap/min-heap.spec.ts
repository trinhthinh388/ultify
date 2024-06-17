import { MinHeap } from './min-heap';

describe('Heap', () => {
  describe('Constructor', () => {
    it('Should construct a valid heap', () => {
      const heap = new MinHeap([47, 92, 1, 20, 92, 50, 8, 51, 42, 7, 18, 54]);
      expect(heap.toArray()).toEqual([
        1, 7, 8, 20, 18, 50, 47, 51, 42, 92, 92, 54,
      ]);
      expect(heap.size).toBe(12);
      expect(heap.isValid()).toBe(true);
      expect(heap.min).toBe(1);
    });
    it('Should construct a min heap by default', () => {
      const heap = new MinHeap([1, 27, 45, 3]);
      expect(heap.toArray()).toEqual([1, 3, 45, 27]);
      expect(heap.isValid()).toBe(true);
      expect(heap.min).toBe(1);
    });
  });

  describe('fromArray', () => {
    it('Should construct a valid heap', () => {
      const heap = MinHeap.fromArray([
        47, 92, 1, 20, 92, 50, 8, 51, 42, 7, 18, 54,
      ]);
      expect(heap.toArray()).toEqual([
        1, 7, 8, 20, 18, 50, 47, 51, 42, 92, 92, 54,
      ]);
      expect(heap.size).toBe(12);
      expect(heap.isValid()).toBe(true);
      expect(heap.min).toBe(1);
    });
    it('Should construct a min heap by default', () => {
      const heap = MinHeap.fromArray([1, 27, 45, 3]);
      expect(heap.toArray()).toEqual([1, 3, 45, 27]);
      expect(heap.isValid()).toBe(true);
      expect(heap.min).toBe(1);
    });
    it('Should construct an empty heap', () => {
      const heap = MinHeap.fromArray<number>(undefined);
      expect(heap.toArray()).toEqual([]);
      expect(heap.isValid()).toBe(true);
      expect(heap.min).toBe(undefined);
    });
  });

  describe('Insert', () => {
    it('Should do nothing if args are not provided', () => {
      const heap = new MinHeap();
      heap.insert();
      expect(heap.toArray()).toEqual([]);
    });
    it('Should create a valid heap', () => {
      const heap = new MinHeap();
      heap.insert(45);
      heap.insert(1);
      heap.insert(27);
      heap.insert(3);
      expect(heap.isValid()).toBe(true);
      heap.insert(67, 2);
      expect(heap.toArray()).toEqual([1, 3, 2, 45, 67, 27]);
      expect(heap.isValid()).toBe(true);
    });
  });

  describe('Extract Min', () => {
    it('Should return undefined if heap is empty', () => {
      const heap = new MinHeap();
      expect(heap.extractMin()).toBe(undefined);
    });
    it('Should remove the root node and maintain the valid heap.', () => {
      const heap = new MinHeap([16, 81, 94, 79, 47, 42, 26, 56, 8, 66, 6]);
      expect(heap.toArray()).toEqual([
        6, 8, 26, 16, 47, 42, 94, 56, 79, 66, 81,
      ]);
      expect(heap.isValid()).toBe(true);

      const el = heap.extractMin();
      expect(el).toBe(6);
      console.log(heap.toArray());
      expect(heap.toArray()).toEqual([8, 16, 26, 56, 47, 42, 94, 81, 79, 66]);
      expect(heap.isValid()).toBe(true);
    });
  });

  describe('Static', () => {
    it('Get index', () => {
      expect(MinHeap.getLeftChildIndex(1)).toBe(3);
      expect(MinHeap.getRightChildIndex(1)).toBe(4);
      expect(MinHeap.getParentIndex(1)).toBe(0);
    });
  });
});
