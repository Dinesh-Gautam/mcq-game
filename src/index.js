import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { GameLogicProvider } from "./hooks/useGameLogic";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GameLogicProvider>
      <App />
    </GameLogicProvider>
  </React.StrictMode>
);
