import { useState } from "react";
interface Props{
    value : number
}
function Contador({value}: Props) {
    const [contador, setContador] = useState(value);
    return(<>
        <h1>Contador: {contador}</h1>
        <button onClick={() => setContador(contador + 1)}>
            Sumar
        </button>
        <button onClick={() => setContador(contador - 1)}>
            Restar
        </button>
        <button onClick={() => setContador(value)}>
            Restart
        </button>
        </>
    )
}
export default Contador;