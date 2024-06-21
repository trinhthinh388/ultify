type CompareFn<T> = (a: T, b: T) => number;

function defaultCompareFn<T>(a: T, b: T) {
  if (a > b) return 1;
  if (a < b) return -1;
  return 0;
}

class BNode<T> {
  data: T;
  left: BNode<T> | undefined;
  right: BNode<T> | undefined;

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
export class BinarySearchTree<T> {
  #root: BNode<T> | undefined;
  #compareFn: CompareFn<T>;

  constructor(values: T[] = [], compareFn: CompareFn<T> = defaultCompareFn) {
    this.#compareFn = compareFn;
    this.insert(...values);
  }

  // @ts-expect-error idk why
  *#traverse(node: BNode<T> | undefined) {
    if (!node) return;

    if (node.left) yield* this.#traverse(node.left);
    if (node.right) yield* this.#traverse(node.right);
    yield node.data;
  }

  #insert(node: BNode<T> | undefined, data: T) {
    if (!node) return new BNode(data);

    if (this.#compareFn(data, node.data) > 0) {
      node.left = this.#insert(node.left, data);
    } else if (this.#compareFn(data, node.data) < 0) {
      node.right = this.#insert(node.right, data);
    } else {
      throw new Error(
        'The data has been consider as a duplicated value with the node',
      );
    }

    return node;
  }

  insert(...values: T[]) {
    for (const value of values) {
      this.#root = this.#insert(this.#root, value);
    }
  }

  *[Symbol.iterator]() {
    yield* this.#traverse(this.#root);
  }
}
