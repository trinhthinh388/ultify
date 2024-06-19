export class TrieNode {
  #wordEnd: boolean = false;
  #children: Map<string, TrieNode>;
  constructor() {
    this.#children = new Map();
  }

  set wordEnd(value: boolean) {
    this.#wordEnd = value;
  }

  get wordEnd() {
    return this.#wordEnd;
  }

  get children() {
    return this.#children;
  }

  isEmpty() {
    return this.#children.size === 0;
  }
}

/**
 * @license MIT
 * @copyright 2024 Thinh Trinh Duc <thinh.duc.trinh@gmail.com>
 *
 * @class
 */
export class Trie {
  #root: TrieNode;

  constructor(...words: string[]) {
    this.#root = new TrieNode();
    for (const word of words) {
      this.insert(word);
    }
  }

  static fromArray(words: string[]) {
    return new Trie(...words);
  }

  /**
   * Total node in the trie including the root node.
   */
  get nodeCount() {
    return this.#getNodeCount();
  }

  /**
   * Total word in the trie.
   */
  get wordCount() {
    return [...this].length;
  }

  #getNodeCount(node: TrieNode = this.#root) {
    if (node.isEmpty()) return 1;

    let sum = 1;

    node.children.forEach((child) => {
      sum += this.#getNodeCount(child);
    });

    return sum;
  }

  #remove(word: string, node: TrieNode = this.#root, depth: number = 0) {
    if (depth === word.length) {
      if (node.isEmpty()) return true;
      return false;
    }

    const char = word[depth];
    const childNode = node.children.get(char);

    if (childNode) {
      const shouldDelete = this.#remove(word, childNode, depth + 1);

      if (shouldDelete) {
        node.children.delete(char);

        if (node.isEmpty()) return true;
      }
    }

    return false;
  }

  // @ts-expect-error idk why
  *#traverse(node: TrieNode = this.#root, str: string = '') {
    if (node.wordEnd) {
      yield str;
    }

    for (const [char, child] of node.children) {
      yield* this.#traverse(child, str + char);
    }
  }

  *[Symbol.iterator]() {
    yield* this.#traverse();
  }

  insert(word: string) {
    let curr = this.#root;
    for (const char of word) {
      if (curr.children.get(char) === undefined) {
        curr.children.set(char, new TrieNode());
      }
      curr = curr.children.get(char)!;
    }

    curr.wordEnd = true;

    return this;
  }

  remove(word: string) {
    this.#remove(word);
    return this;
  }

  has(word: string) {
    let curr = this.#root;
    for (const char of word) {
      if (curr.children.get(char) === undefined) return false;
      curr = curr.children.get(char)!;
    }

    return curr.wordEnd;
  }

  startsWith(word: string) {
    let curr = this.#root;
    for (const char of word) {
      if (curr.children.get(char) === undefined) return false;
      curr = curr.children.get(char)!;
    }

    return true;
  }

  toArray(): string[] {
    return [...this];
  }

  clear() {
    this.#root = new TrieNode();
    return this;
  }
}
