import { Heap } from './heap';

export type MinHeapCompareFn<T> = (a: T, b: T) => number;

function defaultCompareFn<T>(a: T, b: T) {
  if (b > a) return 1;

  if (b < a) return -1;

  return 0;
}

/**
 * @license MIT
 * @copyright 2024 Thinh Trinh Duc <thinh.duc.trinh@gmail.com>
 *
 * @class
 */
export class MinHeap<T> {
  #heap: Heap<T>;

  /**
   *
   * @param values New elements to add to the Heap.
   * @param compareFn Function used to determine the order of the elements. It is expected to return a positive value if the first argument is less than the second argument, zero if they're equal, and a negative value otherwise.
   */
  constructor(
    values: T[] = [],
    compareFn: MinHeapCompareFn<T> = defaultCompareFn,
  ) {
    this.#heap = new Heap(values, compareFn);
  }

  get size() {
    return this.#heap.size;
  }
  get min() {
    return this.#heap.root;
  }

  /**
   *
   * @param values New elements to add to the Heap.
   * @param compareFn Function used to determine the order of the elements. It is expected to return a positive value if the first argument is less than the second argument, zero if they're equal, and a negative value otherwise.
   */
  static fromArray<T>(
    values: T[] = [],
    compareFn: MinHeapCompareFn<T> = defaultCompareFn,
  ) {
    return new MinHeap(values, compareFn);
  }
  /**
   * Get left child's index of the provided index.
   * @param i index of the node
   */
  static getLeftChildIndex(i: number) {
    return Heap.getLeftChildIndex(i);
  }
  /**
   * Get right child's index of the provided index.
   * @param i index of the node
   */
  static getRightChildIndex(i: number) {
    return Heap.getRightChildIndex(i);
  }
  /**
   * Get parent's index of the provided index.
   * @param i index of the node
   */
  static getParentIndex(i: number) {
    return Heap.getParentIndex(i);
  }

  /**
   * Inserts new elements to the Heap.
   * if only single value is add the complexity is log(N)
   * otherwise the complexity is log(N)
   * @param values New elements to add to the Heap.
   */
  insert(...values: T[]) {
    return this.#heap.insert(...values);
  }

  /**
   * Checks if an array is a valid heap.
   */
  isValid(i: number = 0) {
    return this.#heap.isValid(i);
  }

  /**
   * Remove the max element of a heap and returns it
   * Return `undefined` if heap is empty.
   */
  extractMin() {
    return this.#heap.extractRoot();
  }

  toArray() {
    return this.#heap.toArray();
  }
}
