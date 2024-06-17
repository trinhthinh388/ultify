export type HeapCompareFn<T> = (a: T, b: T) => number;

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
export class Heap<T> {
  #compareFn: HeapCompareFn<T>;
  #heap: T[] = [];

  /**
   *
   * @param values New elements to add to the Heap.
   * @param compareFn Function used to determine the order of the elements. It is expected to return a negative value if the first argument is less than the second argument, zero if they're equal, and a positive value otherwise.
   */
  constructor(
    values: T[] = [],
    compareFn: HeapCompareFn<T> = defaultCompareFn,
  ) {
    this.#compareFn = compareFn;
    this.#insertNodes(values);
  }

  get size() {
    return this.#heap.length;
  }
  get root() {
    return this.#heap[0];
  }

  /**
   *
   * @param values New elements to add to the Heap.
   * @param compareFn Function used to determine the order of the elements. It is expected to return a negative value if the first argument is less than the second argument, zero if they're equal, and a positive value otherwise.
   */
  static fromArray<T>(
    values: T[] = [],
    compareFn: HeapCompareFn<T> = defaultCompareFn,
  ) {
    return new Heap(values, compareFn);
  }
  /**
   * Get left child's index of the provided index.
   * @param i index of the node
   */
  static getLeftChildIndex(i: number) {
    return 2 * i + 1;
  }
  /**
   * Get right child's index of the provided index.
   * @param i index of the node
   */
  static getRightChildIndex(i: number) {
    return 2 * i + 2;
  }
  /**
   * Get parent's index of the provided index.
   * @param i index of the node
   */
  static getParentIndex(i: number) {
    return Math.floor((i - 1) / 2);
  }

  #getLastNonLeafIndex() {
    return Heap.getParentIndex(this.size - 1);
  }

  #insertNode(value: T) {
    let i = this.size;
    this.#heap.push(value);

    let parentIndex = Heap.getParentIndex(i);
    while (
      i !== 0 &&
      this.#compareFn(this.#heap[parentIndex], this.#heap[i]) < 0
    ) {
      const temp = this.#heap[i];
      this.#heap[i] = this.#heap[parentIndex];
      this.#heap[parentIndex] = temp;
      i = parentIndex;
      parentIndex = Heap.getParentIndex(i);
    }
  }

  #insertNodes(values: T[]) {
    this.#heap.push(...values);
    const lastNonLeafIndex = this.#getLastNonLeafIndex();
    for (let i = lastNonLeafIndex; i >= 0; i--) {
      this.#heapify(i);
    }
  }

  #heapify(i: number) {
    const left = Heap.getLeftChildIndex(i);
    const right = Heap.getRightChildIndex(i);

    let largest = i;

    if (
      left < this.size &&
      this.#compareFn(this.#heap[left], this.#heap[i]) > 0 // Left child is greater than the root node.
    ) {
      largest = left;
    }

    if (
      right < this.size &&
      this.#compareFn(this.#heap[right], this.#heap[largest]) > 0 // Right child is greater than the root node.
    ) {
      largest = right;
    }

    if (largest !== i) {
      const temp = this.#heap[i];
      this.#heap[i] = this.#heap[largest];
      this.#heap[largest] = temp;
      this.#heapify(largest);
    }
  }

  /**
   * Inserts new elements to the Heap.
   * if only single value is add the complexity is log(N)
   * otherwise the complexity is log(N)
   * @param values New elements to add to the Heap.
   */
  insert(...values: T[]) {
    if (values.length === 0) return;
    if (values.length === 1) return this.#insertNode(values[0]); // O(logN)
    this.#insertNodes(values);
  }

  /**
   * Checks if an array is a valid heap.
   */
  isValid(i: number = 0) {
    if (i >= Heap.getParentIndex(this.size)) return true;

    /* istanbul ignore else -- @preserve */
    if (
      this.#compareFn(this.#heap[i], this.#heap[Heap.getLeftChildIndex(i)]) >=
        0 &&
      this.#compareFn(this.#heap[i], this.#heap[Heap.getRightChildIndex(i)]) >=
        0 &&
      this.isValid(Heap.getLeftChildIndex(i)) &&
      this.isValid(Heap.getRightChildIndex(i))
    )
      return true;

    /* istanbul ignore next -- @preserve */
    return false;
  }

  /**
   * Remove the top element of a heap and returns it
   * Return `undefined` if heap is empty.
   */
  extractRoot() {
    if (!this.size) return undefined;

    const temp = this.#heap[0];
    this.#heap[0] = this.#heap[this.size - 1];
    this.#heap[this.size - 1] = temp;

    const root = this.#heap.pop();

    this.#heapify(0);

    return root;
  }

  toArray() {
    return [...this.#heap];
  }
}
