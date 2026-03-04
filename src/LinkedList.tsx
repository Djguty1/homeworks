import { Node } from "./LinkedNodes";
import type { Video } from "./types";

export class LinkedList {
  head: Node | null;
  tail: Node | null;
  length: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  append(value: Video) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
    } else {
      (this.tail as Node).next = newNode;
    }

    this.tail = newNode;
    this.length++;
  }

  size() {
    return this.length;
  }
}