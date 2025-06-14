import React, { useState, useEffect } from "react";

const checkGanador = (casillas) => {
  const combinacionesGanadoras = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (const combinacion of combinacionesGanadoras) {
    const [a, b, c] = combinacion;
    if (
      casillas[a] &&
      casillas[a] === casillas[b] &&
      casillas[a] === casillas[c]
    ) {
      return casillas[a]; // devuelve el ganador ("X" o "O")
    }
  }
};

export default function useTicTacToe() {
  const [turno, setTurno] = useState("O"); // estado para el turno actual, el otro jugador es jugadorX
  const [casillas, setCasillas] = useState(Array(9).fill("")); // X y O en las casillas
  const [contadorX, setContadorX] = useState(0); // contador para wins de jugador X
  const [contadorO, setContadorO] = useState(0); // contador para wins de jugador O

  useEffect(() => {
    const ganador = checkGanador(casillas);
    setTurno(turno === "O" ? "X" : "O"); // alternar turno
    // si hay un ganador, mostrar alerta y reiniciar el juego
    if (ganador) {
      setTimeout(() => {
        reiniciarJuego();
        alert(`¡El ganador es ${ganador === "O" ? "⭕" : "❌"}!`);

        if (ganador === "O") {
          setContadorO(contadorO + 1); // incrementar contador de O
        } else {
          setContadorX(contadorX + 1); // incrementar contador de X
        }
      }, 100);
    } else if (!casillas.includes("")) {
      // si no hay ganador y no quedan casillas vacías, es un empate
      setTimeout(() => {
        alert("¡Es un empate!");
        reiniciarJuego();
      }, 100);
    }
  }, [casillas]); // efecto para inicializar el juego, aunque aquí no es necesario

  const manejarPresion = (index) => {
    // No reemplazar si ya hay algo
    if (casillas[index] !== "") return;

    const nuevasCasillas = [...casillas];
    nuevasCasillas[index] = turno;
    setCasillas(nuevasCasillas);
  };

  const reiniciarJuego = () => {
    setCasillas(Array(9).fill("")); // reiniciar las casillas
    setTurno("X"); // reiniciar turno a O
  };

  return {
    turno,
    casillas,
    manejarPresion,
    reiniciarJuego,
    contadorO,
    contadorX,
  };
}
