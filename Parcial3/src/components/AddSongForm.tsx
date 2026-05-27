import { useState } from "react";

import { type Song } from "../models/Song";

import "../styles/addSong.scss";

interface Props {
    onAddSong: (song: Song) => void;
}

export default function AddSongForm({
    onAddSong,
}: Props) {
    const [title, setTitle] = useState("");

    const [artist, setArtist] =
        useState("");

    const [album, setAlbum] = useState("");

    const [duration, setDuration] =
        useState("");

    const [plays, setPlays] = useState(0);

    const [image, setImage] = useState("");

    const [audio, setAudio] = useState("");

    const handleSubmit = (
        e: React.FormEvent
    ) => {
        e.preventDefault();

        const newSong: Song = {
            id: Date.now(),

            title,

            artist,

            album,

            duration,

            plays,

            audio,
        };

        onAddSong(newSong);

        setTitle("");

        setArtist("");

        setAlbum("");

        setDuration("");

        setPlays(0);

        setImage("");

        setAudio("");
    };

    return (
        <section className="add-song-section">
            <h2>➕ Agregar Canción</h2>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Título"
                    value={title}
                    onChange={(e) =>
                        setTitle(e.target.value)
                    }
                    required
                />

                <input
                    type="text"
                    placeholder="Artista"
                    value={artist}
                    onChange={(e) =>
                        setArtist(e.target.value)
                    }
                    required
                />

                <input
                    type="text"
                    placeholder="Álbum"
                    value={album}
                    onChange={(e) =>
                        setAlbum(e.target.value)
                    }
                    required
                />

                <input
                    type="text"
                    placeholder="Duración"
                    value={duration}
                    onChange={(e) =>
                        setDuration(e.target.value)
                    }
                    required
                />

                <input
                    type="number"
                    placeholder="Reproducciones"
                    value={plays}
                    onChange={(e) =>
                        setPlays(Number(e.target.value))
                    }
                    required
                />

                <input
                    type="text"
                    placeholder="URL Imagen"
                    value={image}
                    onChange={(e) =>
                        setImage(e.target.value)
                    }
                    required
                />

                <input
                    type="text"
                    placeholder="Ruta Audio"
                    value={audio}
                    onChange={(e) =>
                        setAudio(e.target.value)
                    }
                    required
                />

                <button type="submit">
                    Agregar
                </button>
            </form>
        </section>
    );
}