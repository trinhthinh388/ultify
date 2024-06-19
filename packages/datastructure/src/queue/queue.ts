class QueueNode<T> {
  data: T;
  next: QueueNode<T> | undefined;
  constructor(data: T) {
    this.data = data;
  }
}

/**
 * @license MIT
 * @copyright 2024 Thinh Trinh Duc <thinh.duc.trinh@gmail.com>
 *
 * @class
 */
export class Queue<T> {
  #root: QueueNode<T> | undefined;
  #top: QueueNode<T> | undefined;
  #count: number = 0;

  /**
   * Create a new queue
   */
  constructor(...elements: T[]) {
    this.enqueue(...elements);
  }

  #enqueue(data: T) {
    if (!this.#top) {
      this.#root = this.#top = new QueueNode(data);
    } else {
      this.#top.next = new QueueNode(data);
      this.#top = this.#top.next;
    }

    this.#count++;
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
   * Queue's size
   * @readonly
   */
  get size() {
    return this.#count;
  }

  /**
   * Check if the queue is empty.
   */
  isEmpty() {
    return this.#root === undefined;
  }

  /**
   * Enqueue new elements, and returns the new size of the queue.
   */
  enqueue(...values: T[]) {
    for (const value of values) {
      this.#enqueue(value);
    }
  }

  /**
   *
   * Removes the frist element from a queue and returns it.
   * If the queue is empty, undefined is returned and the queue is not modified.
   */
  dequeue() {
    if (!this.#root) return undefined;

    const value = this.#root.data;
    this.#root = this.#root.next;

    if (this.#root === undefined) {
      this.#top = undefined;
    }

    this.#count--;

    return value;
  }

  /**
   * Returns the top element without removing it
   */
  peek() {
    return this.#root?.data;
  }

  /**
   * Clear queue
   */
  clear() {
    this.#root = undefined;
    this.#top = undefined;
    this.#count = 0;
    return this;
  }

  /**
   * Convert stack to array
   */
  toArray() {
    return [...this];
  }

  *[Symbol.iterator]() {
    let curr = this.#root;

    while (curr) {
      yield curr.data;
      curr = curr.next;
    }
  }
}
