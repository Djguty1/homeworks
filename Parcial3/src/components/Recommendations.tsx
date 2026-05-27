import "../styles/recommendations.scss";
interface Props {
    songs: string[];
}

export default function Recommendations({
    songs,
}: Props) {
    return (
        <section className="recommendations-section">
            <h2>Recomendaciones</h2>

            {songs.length === 0 ? (
                <div className="empty-recommendation">
                    Busca una canción para ver
                    recomendaciones
                </div>
            ) : (
                <div className="recommendations-grid">
                    {songs.map((song) => (
                        <div
                            className="recommendation-card"
                            key={song}
                        >
                            🎧 {song}
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
}