import { useState } from 'react';

interface Estudiantes {
    nombre: string;
    celular: string;
}


function ListaEstudiantes({ estudiantes,onEliminar }: { estudiantes: Estudiantes[], onEliminar: (index: number) => void  }) {
    if (estudiantes.length === 0) {
        return <h3>No se encontraron alumnos</h3>;
    }
    
    return (
        <ul>
            {estudiantes.map((x,index) => (
                <li key={index}>({x.nombre}, {x.celular})  <button onClick={()=> onEliminar(index)}>Eliminar</button></li>
            ))}
        </ul>
    );
}

interface Props {
    onAgregar: (estudiante: Estudiantes) => void;
}

function AgregarE({ onAgregar }: Props) {
    const [nombre, setNombre] = useState('');
    const [celular, setCelular] = useState('');

    const CrearE = () => {
        const nuevoEstudiante: Estudiantes = {
            nombre: nombre,
            celular: celular
        };
        if(nombre.trim() !=="" && celular.trim() !==""){
             onAgregar(nuevoEstudiante); 
            setNombre('');
            setCelular('');
        }else{
             alert("Por favor completa todos los campos");
        }
        
       
    };

    return (
        <>
            <h2>Agregar Alumno</h2>
            <input
                type="text"
                placeholder="Nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
            />
            <input
                type="text"
                placeholder="Celular"
                value={celular}
                onChange={(e) => setCelular(e.target.value)}
            />
            <button onClick={CrearE}>Agregar</button>
        </>
    );
}


export function ListadoFinal() {
    const [estudiantesN, setEstudiantes] = useState<Estudiantes[]>([
        { nombre: "Santiago Gutierrez", celular: "3163052473" },
        { nombre: "María López", celular: "3154323232" }
    ]);

    const agregarEstudiante = (newEstudiante: Estudiantes) => {
        setEstudiantes([...estudiantesN, newEstudiante]);
    };

    const eliminarEstudiante = (indexQuitar: number) =>{
        const estudiantesRestantes = estudiantesN.filter((_, estudiantesAct) => { 

            if (estudiantesAct !== indexQuitar) {
                return true;  //estudiante queda en la lista
            } else {
                return false; // Este estudiante se va
            }
            });
        setEstudiantes(estudiantesRestantes);
    }

    return (
        <>
            <h2>Lista de alumnos</h2>
            <ListaEstudiantes estudiantes={estudiantesN}
            onEliminar={eliminarEstudiante} />
            <AgregarE onAgregar={agregarEstudiante} />
            
        </>
    );

}