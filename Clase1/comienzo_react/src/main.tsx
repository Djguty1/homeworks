import React from "react";
import ReactDOM from "react-dom/client";
import HelloWorld from "./HelloWorld";
import PrintMessage from "./PrintMessage";
import PrintValue from "./PrintValue";
import Contador from "./Contador";
import Arrays from "./Arrays";
import Arreglos from "./Arreglos";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <HelloWorld />
    <PrintMessage message="Soy el mensaje" />
    <PrintValue value={69} />
    <Contador value={45} />
    <Arrays />
    <Arreglos />
  </React.StrictMode>
)