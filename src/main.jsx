import React from "react";
import { createRoot } from "react-dom/client";
import { ParticlesProvider } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import App from "./App";
import "./global.css";

const initializeParticles = async (engine) => {
  await loadSlim(engine);
};

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ParticlesProvider init={initializeParticles}>
      <App />
    </ParticlesProvider>
  </React.StrictMode>,
);
