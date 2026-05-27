import { type Song } from "../models/Song";

import "../styles/ranking.scss";

interface Props {
    songs: Song[];
}

export default function Ranking({
    songs,
}: Props) {
    return (
        <section className="ranking-section">
            <div className="section-header">
                <h2>Top Canciones</h2>

                <p>
                    Ranking basado en reproducciones
                </p>
            </div>

            <div className="songs-grid">
                {songs.map((song, index) => (
                    <div
                        className="song-card"
                        key={song.id}
                    >
                        <div className="song-position">
                            #{index + 1}
                        </div>


                        <div className="song-content">
                            <h3>{song.title}</h3>

                            <span className="artist">
                                {song.artist}
                            </span>

                            <span className="album">
                                {song.album}
                            </span>

                            <div className="song-meta">
                                <span>
                                    {song.plays} plays
                                </span>

                                <span>
                                    ⏱ {song.duration}
                                </span>
                            </div>

                            <audio controls>
                                <source
                                    src={song.audio}
                                    type="audio/mp3"
                                />
                            </audio>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}