/**
 * @license MIT
 * @copyright 2024 Thinh Trinh Duc <thinh.duc.trinh@gmail.com>
 *
 * @class
 */
export class Stack<T> {
  #array: T[] = [];

  /**
   * Create a new stack
   */
  constructor(...elements: T[]) {
    this.#array = [...elements];
  }

  /**
   * Creates a stack from the existing array
   * @public
   * @static
   * @param {array} [elements]
   * @return {Stack}
   */
  static fromArray<T>(arr: T[]) {
    return new Stack<T>(...arr);
  }

  /**
   * Stack's size
   * @readonly
   */
  get size() {
    return this.#array.length;
  }

  /**
   * Check if the stack is empty.
   */
  isEmpty() {
    return this.#array.length === 0;
  }

  /**
   *
   * Removes the last element from a stack and returns it.
   * If the stack is empty, undefined is returned and the stack is not modified.
   */
  pop() {
    return this.#array.pop();
  }

  /**
   * Push new elements to the end of a stack, and returns the new size of the stack.
   */
  push(...value: T[]) {
    return this.#array.push(...value);
  }

  /**
   * Returns the top element without removing it
   */
  peek() {
    return this.#array.at(-1)
  }

  /**
   * Clear stack
   */
  clear() {
    this.#array = [];
  }

  /**
   * Convert stack to array
   */
  toArray() {
    return [...this.#array];
  }
}
