import { Heap } from './heap';

export type MaxHeapCompareFn<T> = (a: T, b: T) => number;

function defaultCompareFn<T>(a: T, b: T) {
  if (a > b) return 1;

  if (a < b) return -1;

  return 0;
}

/**
 * @license MIT
 * @copyright 2024 Thinh Trinh Duc <thinh.duc.trinh@gmail.com>
 *
 * @class
 */
export class MaxHeap<T> {
  #heap: Heap<T>;

  /**
   *
   * @param values New elements to add to the Heap.
   * @param compareFn Function used to determine the order of the elements. It is expected to return a negative value if the first argument is less than the second argument, zero if they're equal, and a positive value otherwise.
   */
  constructor(
    values: T[] = [],
    compareFn: MaxHeapCompareFn<T> = defaultCompareFn,
  ) {
    this.#heap = new Heap(values, compareFn);
  }

  get size() {
    return this.#heap.size;
  }
  get max() {
    return this.#heap.root;
  }

  /**
   *
   * @param values New elements to add to the Heap.
   * @param compareFn Function used to determine the order of the elements. It is expected to return a negative value if the first argument is less than the second argument, zero if they're equal, and a positive value otherwise.
   */
  static fromArray<T>(
    values: T[] = [],
    compareFn: MaxHeapCompareFn<T> = defaultCompareFn,
  ) {
    return new MaxHeap(values, compareFn);
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
  extractRoot() {
    return this.#heap.extractRoot();
  }

  toArray() {
    return this.#heap.toArray();
  }
}
