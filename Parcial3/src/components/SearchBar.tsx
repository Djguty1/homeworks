import { useState } from "react";

interface Props {
    onSearch: (value: string) => void;
    suggestions: string[];
}

export default function SearchBar({
    onSearch,
    suggestions,
}: Props) {
    const [query, setQuery] = useState("");

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        const value = e.target.value;

        setQuery(value);

        onSearch(value);
    };

    return (
        <div className="search-wrapper">
            <h1>Spotify EDYA2</h1>

            <div className="search-container">
                <input
                    type="text"
                    placeholder="Buscar canción..."
                    value={query}
                    onChange={handleChange}
                />

                {query && (
                    <div className="suggestions-box">
                        {suggestions.length > 0 ? (
                            suggestions.map((song) => (
                                <div
                                    className="suggestion-item"
                                    key={song}
                                >
                                    🎧 {song}
                                </div>
                            ))
                        ) : (
                            <div className="no-results">
                                No se encontraron canciones
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}