import { TrieNode } from "./TrieNode";

export class Trie {
    root: TrieNode;

    constructor() {
        this.root = new TrieNode();
    }

    insert(word: string): void {
        let current = this.root;

        for (const char of word.toLowerCase()) {
            if (!current.children.has(char)) {
                current.children.set(char, new TrieNode());
            }

            current = current.children.get(char)!;
        }

        current.isEndOfWord = true;
    }

    search(word: string): boolean {
        let current = this.root;

        for (const char of word.toLowerCase()) {
            if (!current.children.has(char)) {
                return false;
            }

            current = current.children.get(char)!;
        }

        return current.isEndOfWord;
    }

    suggestions(prefix: string): string[] {
        let current = this.root;

        for (const char of prefix.toLowerCase()) {
            if (!current.children.has(char)) {
                return [];
            }

            current = current.children.get(char)!;
        }

        const results: string[] = [];

        this.dfs(current, prefix, results);

        return results;
    }

    private dfs(
        node: TrieNode,
        word: string,
        results: string[]
    ): void {
        if (node.isEndOfWord) {
            results.push(word);
        }

        for (const [char, nextNode] of node.children) {
            this.dfs(nextNode, word + char, results);
        }
    }
}