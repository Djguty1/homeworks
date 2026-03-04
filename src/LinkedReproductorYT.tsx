import { useState } from "react";
import { LinkedList } from "./LinkedList";
import { Node } from "./LinkedNodes";

type Video = {
  id: number;
  title: string;
  youtuber: string;
};

const mockedVideos: Video[] = [
  { id: 1, title: "Probando comida callejera en México", youtuber: "Luisito Comunica" },
  { id: 2, title: "Sobreviviendo 24 horas en el desierto", youtuber: "MrBeast" },
  { id: 3, title: "Mi rutina de estudio para la universidad", youtuber: "Juliana Profe" },
  { id: 4, title: "Aprendiendo JavaScript desde cero", youtuber: "Fazt" },
  { id: 5, title: "Explorando lugares abandonados", youtuber: "DrossRotzank" },
  { id: 6, title: "Intentando no reír con memes 2026", youtuber: "AuronPlay" },
  { id: 7, title: "Construyendo mi PC Gamer paso a paso", youtuber: "Nate Gentile" },
  { id: 8, title: "El mejor setup calidad-precio 2026", youtuber: "SupraPixel" },
  { id: 9, title: "Retando a mi suscriptor en FIFA", youtuber: "DjMaRiiO" },
  { id: 10, title: "Cómo invertir siendo estudiante", youtuber: "Balio" },
];

type PlayerState = {
  list: LinkedList;
  current: Node | null;
};

export default function LinkedReproductor() {
  const [player, setPlayer] = useState<PlayerState>(() => {
    const list = new LinkedList();
    mockedVideos.forEach((s) => list.append(s));
    return { list, current: list.head };
  });

  const siguiente = () => {
    setPlayer((p) => ({
      ...p,
      current: p.current?.next ? p.current.next : p.current,
    }));
  };

  const cancionInicial = () => {
    setPlayer((p) => ({ ...p, current: p.list.head }));
  };

  return (
    <>
      <h2>Linked Reproductor Videos YT (Linked List)</h2>

      <p>
        Estas viendo:{" "}
        {player.current
          ? `${player.current.value.title} - ${player.current.value.youtuber}`
          : "---"}
      </p>

      <button onClick={siguiente}>Siguiente</button>
      <button onClick={cancionInicial}>Video Inicial</button>
    </>
  );
}