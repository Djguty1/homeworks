import { useState } from "react";
import PersonaForm from "./PersonaForm";
import { Persona, type laPersona } from "./Persona";
import "./App.css";

const cola = new Persona

// Mock Data
cola.enqueue({
  nombre: "Carlos Pérez",
  withdrawalAmount: 500000,
  arrivalDate: new Date("2026-03-17T08:00:00")
})

cola.enqueue({
  nombre: "Ana Gómez",
  withdrawalAmount: 2000000,
  arrivalDate: new Date("2026-03-17T08:05:00")
})

cola.enqueue({
  nombre: "Luis Torres",
  withdrawalAmount: 7500000,
  arrivalDate: new Date("2026-03-17T08:10:00")
})

function App() {
  const [personas, setPersonas] = useState<laPersona[]>(cola.getQueue());

  // agregar persona
  const addPersona = (persona: laPersona) => {
    cola.enqueue(persona);
    setPersonas(cola.getQueue());
  };

  // atender (FIFO)
  const atender = () => {
    cola.dequeue();
    setPersonas(cola.getQueue());
  };

  

  return (
    <div className="app">
      <header className="app-header">
        <h1>ATM Queue</h1>
        <p>Fila de atención</p>
      </header>

      <PersonaForm addPersona={addPersona} />

      <button className="btn-atender" onClick={atender}>
        Atender siguiente
      </button>

      <p className="queue-label">En espera — {personas.length}</p>

      <div className="queue-list">
        {personas.map((p, index) => (
          <div className="persona-card" key={index}>
            <div>
              <p className="position">#{index + 1}</p>
              <p className="nombre">{p.nombre}</p>
              <p className="fecha">{p.arrivalDate.toLocaleTimeString()}</p>
            </div>
            <p className="monto">
              ${p.withdrawalAmount.toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;