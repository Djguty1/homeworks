import { useState } from "react";
import { auth } from "../../firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";
import Register from "./register";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isRegister, setIsRegister] = useState(false);

    const login = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
        } catch {
            alert("Error en login");
        }
    };

    if (isRegister) {
        return (
            <>
                <Register />
                <button onClick={() => setIsRegister(false)}>
                    Volver al login
                </button>
            </>
        );
    }

    return (
        <div className="auth-container">
            <div className="auth-box">

                <h2>Login</h2>

                <input
                    placeholder="Correo"
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="Contraseña"
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button onClick={login}>Entrar</button>

                <button onClick={() => setIsRegister(true)}>
                    Crear cuenta
                </button>

            </div>
        </div>
    );
}