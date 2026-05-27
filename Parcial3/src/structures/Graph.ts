export class Graph {
    adjacencyList: Map<string, string[]>;

    constructor() {
        this.adjacencyList = new Map();
    }

    addSong(song: string): void {
        const normalizedSong =
            song.toLowerCase();

        if (
            !this.adjacencyList.has(
                normalizedSong
            )
        ) {
            this.adjacencyList.set(
                normalizedSong,
                []
            );
        }
    }

    addConnection(
        song1: string,
        song2: string
    ): void {
        const s1 = song1.toLowerCase();

        const s2 = song2.toLowerCase();

        if (!this.adjacencyList.has(s1)) {
            this.addSong(s1);
        }

        if (!this.adjacencyList.has(s2)) {
            this.addSong(s2);
        }

        this.adjacencyList.get(s1)?.push(song2);

        this.adjacencyList.get(s2)?.push(song1);
    }

    getRecommendations(
        song: string
    ): string[] {
        return (
            this.adjacencyList.get(
                song.toLowerCase()
            ) || []
        );
    }
}