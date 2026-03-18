import { useState } from "react";
import {type laPersona} from "./Persona";

interface Props {
    addPersona: (persona:laPersona) => void; 
}

function PersonaForm({addPersona}: Props){
    const [nombre, setNombre] = useState('');
    const [withdrawalAmount, setWithdrawalAmount] = useState(0);
    const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const nuevaPersona: laPersona = {
      nombre,
      withdrawalAmount,
      arrivalDate: new Date()
    };

    addPersona(nuevaPersona);

    setNombre("");
    setWithdrawalAmount(0);
  };

  return (
    <form className="persona-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />

      <input
        type="number"
        placeholder="Monto"
        value={withdrawalAmount || ""}
        onChange={(e) => setWithdrawalAmount(Number(e.target.value))}
      />

      <button type="submit">Agregar</button>
    </form>
  );
}

export default PersonaForm;
