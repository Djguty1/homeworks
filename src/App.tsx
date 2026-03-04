import { useEffect, useState } from 'react'
import './App.css'

type Paciente = {
  nombre: string;
  cedula: string;
  next: Paciente | null;
}

type Historial = {
  nombre: string;
  cedula: string;
  prev: Historial | null;
  next: Historial | null;
}

type Medico = {
  nombre: string;
  id: string;
  next: Medico | null;
}

type miembro = {
  nombre: string;
  cel: string;
  prev: miembro | null;
  next: miembro | null;
}
function App() {
  const [headPaciente, setHeadPaciente] = useState<Paciente | null>(null);
  const [nomPaciente, setNomPaciente] = useState("");
  const [cedulaPaciente, setCedulaPaciente] = useState("");
  const addPaciente = () => {
    if(!nomPaciente || !cedulaPaciente) return;
    const newPaciente: Paciente = {
      nombre: nomPaciente,
      cedula: cedulaPaciente,
      next: null
    }

    if(!headPaciente) {
      setHeadPaciente(newPaciente);
    }else {
      let current = headPaciente;
      while(current.next) {
        current = current.next;
      }
      current.next = newPaciente;
    }
    setNomPaciente("");
    setCedulaPaciente("");

  }
  const [headHistorial, setHeadHistorial] = useState<Historial | null>(null);
  const addHistorial = (nombre: string, cedula: string) => {
    if(!nombre || !cedula) return;
    const newHistorial: Historial = {
      nombre: nombre,
      cedula: cedula,
      prev: null,
      next: null
    };

    if(!headHistorial) {
      setHeadHistorial(newHistorial);
    }else {
      let current = headHistorial;
      while(current.next) {
        current = current.next;
      }
      current.next = newHistorial;
      newHistorial.prev = current;
    };
  }
  const atendiendoPaciente = () => {
    if(!headPaciente) return;
    const nombre = headPaciente.nombre;
    const cedula = headPaciente.cedula;

    setHeadPaciente(headPaciente.next);
    
    addHistorial(nombre, cedula);
  }

  const [headMedico, setHeadMedico] = useState<Medico | null>(null);
  useEffect(() => {
    const medico1: Medico = {
    nombre: "Dr. Juan Perez",
    id: "M001",
    next: null
    };

    const medico2: Medico = {
    nombre: "Dra. Laura Gómez",
    id: "M002",
    next: null
    };

    const medico3: Medico = {
    nombre: "Dr. Carlos Rodríguez",
    id: "M003",
    next: null
    };

    const medico4: Medico = {
    nombre: "Dra. Mariana Torres",
    id: "M004",
    next: null
    };

    const medico5: Medico = {
    nombre: "Dr. Andrés Martínez",
    id: "M005",
    next: null
    };

    medico1.next = medico2;
    medico2.next = medico3;
    medico3.next = medico4;
    medico4.next = medico5;
    medico5.next = medico1;

    setHeadMedico(medico1);
  }
    , []);
    useEffect (() => {
    const tiempo = setInterval(() => {
      if(headMedico?.next) {
        setHeadMedico(headMedico.next);
      }
    }, 10000);
    return () => clearInterval(tiempo);
  }, [headMedico]);


  const [headMiembro, setHeadMiembro] = useState<miembro | null>(null);

  useEffect(() => {
    const miembro1: miembro = {
      nombre: "Santiago Gutierrez",
      cel: "3163052473",
      prev: null,
      next: null
    };
    const miembro2: miembro = {
      nombre: "Valentina Rodríguez",
      cel: "3004567891",
      prev: null,
      next: null
    };

    const miembro3: miembro = {
      nombre: "Andrés Martínez",
      cel: "3129876543",
      prev: null,
      next: null
    };

    miembro1.next = miembro2;
    miembro2.next = miembro3;
    miembro3.next = miembro1;
    miembro1.prev = miembro3;
    miembro2.prev = miembro1;
    miembro3.prev = miembro2;

    setHeadMiembro(miembro1);
  }, []);

  const showPacientes = () => {
    const list = [];
    let current = headPaciente;
    while(current) {
      list.push(
        <li key={current.cedula}>
          {current.nombre} - {current.cedula}
        </li>
      );
      current = current.next;
    }
    return list;
  };


  return (
    <>
       <div style={{ padding: "30px", fontFamily: "Arial" }}>
    <h1>Sistema Clínica - Estructuras de Datos</h1>
     <br />
    <h1>by: Santiago Gutierrez</h1>


    <section style={{ marginBottom: "30px" }}>
      <h2>Agregar Paciente</h2>

      <input
        type="text"
        placeholder="Nombre"
        value={nomPaciente}
        onChange={(e) => setNomPaciente(e.target.value)}
        style={{ marginRight: "10px" }}
      />

      <input
        type="text"
        placeholder="Cédula"
        value={cedulaPaciente}
        onChange={(e) => setCedulaPaciente(e.target.value)}
        style={{ marginRight: "10px" }}
      />

      <button onClick={addPaciente}>Agregar</button>

      <h3 style={{ marginTop: "20px" }}>Pacientes en Espera</h3>
      <ul>{showPacientes()}</ul>

      <button onClick={atendiendoPaciente}>
        Atender Paciente
      </button>
    </section>

    <section style={{ marginBottom: "30px" }}>
      <h2>Médico de Guardia</h2>
      <p>
        {headMedico
          ? `${headMedico.nombre} - Código: ${headMedico.id}`
          : "Cargando médicos..."}
      </p>
    </section>

    <section style={{ marginBottom: "30px" }}>
      <h2>Historial de Atención</h2>
      <ul>
        {(() => {
          const list = [];
          let current = headHistorial;
          while (current) {
            list.push(
              <li key={current.cedula}>
                {current.nombre} - {current.cedula}
              </li>
            );
            current = current.next;
          }
          return list;
        })()}
      </ul>
    </section>
    <section>
      <h2>Comité Administrativo</h2>
      <p>
        {headMiembro
          ? `${headMiembro.nombre} - Cel: ${headMiembro.cel}`
          : "No hay miembros"}
      </p>
    </section>
  </div>
    </>
  )
}

export default App
