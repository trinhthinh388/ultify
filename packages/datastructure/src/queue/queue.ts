/**
 * @license MIT
 * @copyright 2024 Thinh Trinh Duc <thinh.duc.trinh@gmail.com>
 *
 * @class
 */
export class Queue<T> {
  #array: T[] = [];

  /**
   * Create a new queue
   */
  constructor(...elements: T[]) {
    this.#array = [...elements];
  }

  /**
   * Creates a queue from the existing array
   * @public
   * @static
   * @param {Array} [elements]
   * @return {Stack}
   */
  static fromArray<T>(arr: T[]) {
    return new Queue<T>(...arr);
  }

  /**
   * Convert stack to array
   */
  toArray() {
    return [...this.#array];
  }

  /**
   * Queue's size
   * @readonly
   */
  get size() {
    return this.#array.length;
  }

  /**
   * Check if the queue is empty.
   */
  isEmpty() {
    return this.#array.length === 0;
  }

  /**
   * Enqueue new elements, and returns the new size of the queue.
   */
  enqueue(...value: T[]) {
    return this.#array.push(...value);
  }

  /**
   *
   * Removes the frist element from a queue and returns it.
   * If the queue is empty, undefined is returned and the queue is not modified.
   */
  dequeue() {
    return this.#array.shift();
  }

  /**
   * Returns the top element without removing it
   */
  peek() {
    return this.#array[0];
  }

  /**
   * Clear queue
   */
  clear() {
    this.#array = [];
    return this;
  }
}
