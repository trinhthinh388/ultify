import { Stack } from "./stack";

describe('Stack', () => {
  describe('Constructor', () => {
    it('Should be able to create new Queue with values', () => {
      expect((new Stack(1,2,3)).toArray()).toEqual([1,2,3])
    })

    it('Should be able to create a queue from an array', () => {
      expect((Stack.fromArray([1,2,3])).toArray()).toEqual([1,2,3])
    })
  })

  describe('Operations', () => {
    const queue = new Stack()
    it('Should work correctly', () => {
      expect(queue.isEmpty()).toBe(true)
      queue.push(1)
      expect(queue.size).toBe(1)
      expect(queue.isEmpty()).toBe(false)
      expect(queue.peek()).toBe(1)
      queue.pop()
      expect(queue.size).toBe(0)
      expect(queue.isEmpty()).toBe(true)
      expect(queue.peek()).toBe(undefined)

      queue.push(1, 2, 3)
      queue.clear()
      expect(queue.size).toBe(0)
      expect(queue.isEmpty()).toBe(true)
      expect(queue.peek()).toBe(undefined)
    })
  })
})