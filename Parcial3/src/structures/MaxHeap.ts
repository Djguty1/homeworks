import { type Song } from "../models/Song";

export class MaxHeap {
    heap: Song[];

    constructor() {
        this.heap = [];
    }

    insert(song: Song): void {
        this.heap.push(song);

        this.heapifyUp();
    }

    private heapifyUp(): void {
        let index = this.heap.length - 1;

        while (index > 0) {
            const parentIndex = Math.floor(
                (index - 1) / 2
            );

            if (
                this.heap[parentIndex].plays >=
                this.heap[index].plays
            ) {
                break;
            }

            [
                this.heap[parentIndex],
                this.heap[index],
            ] = [
                    this.heap[index],
                    this.heap[parentIndex],
                ];

            index = parentIndex;
        }
    }

    getTopSongs(k: number): Song[] {
        return [...this.heap]
            .sort((a, b) => b.plays - a.plays)
            .slice(0, k);
    }
}