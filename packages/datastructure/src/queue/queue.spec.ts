import { Queue } from './queue';

describe('Queue', () => {
  describe('Constructor', () => {
    it('Should be able to create new Queue with values', () => {
      expect(new Queue(1, 2, 3).toArray()).toEqual([1, 2, 3]);
    });

    it('Should be able to create a queue from an array', () => {
      expect(Queue.fromArray([1, 2, 3]).toArray()).toEqual([1, 2, 3]);
    });
  });

  describe('Operations', () => {
    it('Should work correctly', () => {
      const queue = new Queue();
      expect(queue.isEmpty()).toBe(true);
      queue.enqueue(1);
      expect(queue.size).toBe(1);
      expect(queue.isEmpty()).toBe(false);
      expect(queue.peek()).toBe(1);
      queue.dequeue();
      expect(queue.size).toBe(0);
      expect(queue.isEmpty()).toBe(true);
      expect(queue.peek()).toBe(undefined);
      expect(queue.dequeue()).toBe(undefined);

      queue.enqueue(1, 2, 3);

      queue.dequeue();
      queue.enqueue(3);

      queue.clear();
      expect(queue.size).toBe(0);
      expect(queue.isEmpty()).toBe(true);
      expect(queue.peek()).toBe(undefined);
    });
  });
});
