import "../styles/graph.scss";

interface Props {
    graph: Map<string, string[]>;
}

export default function GraphView({
    graph,
}: Props) {
    return (
        <section className="graph-section">
            <h2>Relaciones entre canciones</h2>

            <div className="graph-grid">
                {[...graph.entries()].map(
                    ([song, relations]) => (
                        <div
                            className="graph-card"
                            key={song}
                        >
                            <h3>{song}</h3>

                            <div className="relations">
                                {relations.length === 0 ? (
                                    <span>
                                        Sin relaciones
                                    </span>
                                ) : (
                                    relations.map((related) => (
                                        <div
                                            className="relation-pill"
                                            key={related}
                                        >
                                            {related}
                                        </div>
                                    ))
                                )}
                            </div>
                        </div>
                    )
                )}
            </div>
        </section>
    );
}