import { useEffect, useRef, useState } from "react";

import { Trie } from "./structures/Trie";
import { MaxHeap } from "./structures/MaxHeap";
import { Graph } from "./structures/Graph";

import { songs } from "./data/songs";

import Dashboard from "./components/Dashboard";

import { type Song } from "./models/Song";

function App() {
  const trie = useRef(new Trie()).current;

  const heap = useRef(new MaxHeap()).current;

  const graph = useRef(new Graph()).current;

  const [suggestions, setSuggestions] =
    useState<string[]>([]);

  const [topSongs, setTopSongs] = useState<
    Song[]
  >([]);

  const [recommendations, setRecommendations] =
    useState<string[]>([]);

  useEffect(() => {
    songs.forEach((song) => {
      trie.insert(song.title);

      heap.insert(song);

      graph.addSong(song.title);
    });

    graph.addConnection(
      "La Canción",
      "No Me Importa"
    );

    graph.addConnection(
      "La Canción",
      "Fantasías"
    );

    graph.addConnection(
      "Esclava Remix",
      "Netflixxx"
    );

    graph.addConnection(
      "Netflixxx",
      "Fantasías"
    );

    graph.addConnection(
      "Virgen",
      "No Me Importa"
    );

    graph.addConnection(
      "Fantasías",
      "La Canción"
    );

    graph.addConnection(
      "Esclava Remix",
      "La Canción"
    );

    graph.addConnection(
      "Virgen",
      "Fantasías"
    );

    setTopSongs(
      heap.getTopSongs(songs.length)
    );
  }, []);

  const handleSearch = (value: string) => {
    const results = trie.suggestions(value);

    setSuggestions(results);

    if (results.length > 0) {
      setRecommendations(
        graph.getRecommendations(results[0])
      );
    } else {
      setRecommendations([]);
    }
  };

  return (
    <Dashboard
      topSongs={topSongs}
      suggestions={suggestions}
      recommendations={recommendations}
      onSearch={handleSearch}
      graph={graph.adjacencyList}
    />
  );
}

export default App;