import { useState } from "react";
import { auth } from "../../firebase/config";
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleRegister = async () => {
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            alert("Usuario creado correctamente");
        } catch (error) {
            alert("Error al registrar, revise ya que la contraseña debe tener al menos 6 caracteres");
        }
    };

    return (
        <div className="auth-container">
            <div className="auth-box">

                <h2>Registro</h2>

                <input
                    placeholder="Correo"
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="Contraseña"
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button onClick={handleRegister}>Registrarse</button>

            </div>
        </div>
    );
}
