"use client";
import React, { useEffect } from "react";
import "./StarryBackground.css";

const StarryBackground: React.FC = () => {
  useEffect(() => {
    const numSymbols = 20;
    const symbols = [
      "π",
      "α",
      "∑",
      "∞",
      "Δ",
      "λ",
      "θ",
      "Ω",
      "μ",
      "σ",
      "Φ",
      "Γ",
      "β",
      "η",
      "κ",
      "ξ",
      "τ",
      "ψ",
      "χ",
      "ζ",
    ];

    function createSymbol() {
      const container = document.getElementById("stars");
      if (container) {
        let symbol = document.createElement("div");
        symbol.className = "math-symbol";
        symbol.textContent =
          symbols[Math.floor(Math.random() * symbols.length)];
        let xy = randomPosition();
        symbol.style.top = `${xy[1]}px`;
        symbol.style.left = `${xy[0]}px`;
        container.appendChild(symbol);

        setTimeout(() => {
          symbol.remove();
        }, 10000); // La animación dura 10s
      }
    }

    function randomPosition(): [number, number] {
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      const x = Math.random() * windowWidth;
      const y = Math.random() * windowHeight;
      return [x, y];
    }

    // Crear los símbolos uno por uno con un ligero retraso para evitar bloqueos
    for (let i = 0; i < numSymbols; i++) {
      setTimeout(createSymbol, i * 100); // Crear símbolo con retraso
    }

    // Crear nuevos símbolos cada 3 segundos
    const interval = setInterval(() => {
      createSymbol();
    }, 3000);

    // Limpiar el intervalo al desmontar el componente
    return () => clearInterval(interval);
  }, []);

  return <div id="stars" className="starry-background"></div>;
};

export default StarryBackground;
