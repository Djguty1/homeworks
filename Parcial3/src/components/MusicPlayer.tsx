import { type Song } from "../models/Song";

interface Props {
    song: Song;
}

export default function MusicPlayer({
    song,
}: Props) {
    return (
        <div className="music-player">
            <audio controls>
                <source
                    src={song.audio}
                    type="audio/mp3"
                />

                Tu navegador no soporta audio.
            </audio>
        </div>
    );
}