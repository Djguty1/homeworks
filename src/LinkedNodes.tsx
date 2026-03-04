import type { Video } from "./types";

export class Node {
  value: Video;
  next: Node | null;

  constructor(value: Video) {
    this.value = value;
    this.next = null;
  }
}