import { type Song } from "../models/Song";

import SearchBar from "./SearchBar";
import Ranking from "./Ranking";
import Recommendations from "./Recommendations";
import GraphView from "./GraphView";

interface Props {
    topSongs: Song[];
    suggestions: string[];
    recommendations: string[];
    onSearch: (value: string) => void;

    graph: Map<string, string[]>;
}

export default function Dashboard({
    topSongs,
    suggestions,
    recommendations,
    onSearch,
    graph,
}: Props) {
    return (
        <div className="dashboard">
            <SearchBar
                onSearch={onSearch}
                suggestions={suggestions}
            />

            <Ranking songs={topSongs} />

            <Recommendations
                songs={recommendations}
            />

            <GraphView graph={graph} />
        </div>
    );
}