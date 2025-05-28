import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState, useEffect, use } from "react";

export default function App() {
  const [turno, setTurno] = useState("⭕"); // estado para el turno actual, el otro jugador es jugadorX
  const [casillas, setCasillas] = useState(Array(9).fill("")); // X y O en las casillas

  useEffect(() => {
    setTurno(turno === "⭕" ? "❌" : "⭕"); // alternar turno

    const ganador = checkGanador();
    // si hay un ganador, mostrar alerta y reiniciar el juego
    if (ganador) {
      alert(`¡El ganador es ${ganador}!`);
      reiniciarJuego();
    } else if (!casillas.includes("")) {
      // si no hay ganador y no quedan casillas vacías, es un empate
      alert("¡Es un empate!");
      reiniciarJuego();
    }
  }, [casillas]); // efecto para inicializar el juego, aunque aquí no es necesario

  const manejarPresion = (index) => {
    // No reemplazar si ya hay algo
    if (casillas[index] !== "") return;

    const nuevasCasillas = [...casillas];
    nuevasCasillas[index] = turno;
    setCasillas(nuevasCasillas);
  };

  const checkGanador = () => {
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

  const reiniciarJuego = () => {
    setCasillas(Array(9).fill("")); // reiniciar las casillas
    setTurno("O"); // reiniciar turno a O
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.textoTurno}>Turno: {turno}</Text>
      <View style={styles.grid}>
        {casillas.map((value, index) => (
          <TouchableOpacity // usamos TouchableOpacity para que el botón sea personalizable
            key={index}
            style={styles.botonTaTeTi}
            disabled={value !== ""} // deshabilitamos el botón si ya hay algo en la casilla
            onPress={() => {
              manejarPresion(index);
            }}
          >
            <Text style={styles.texto}>{casillas[index]}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity
        style={styles.botonReiniciar}
        onPress={reiniciarJuego} // botón para reiniciar el juego
      >
        <Text style={styles.texto}>Reiniciar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    justifyContent: "center",
    alignItems: "center",
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    maxWidth: 400, // ancho máximo del grid para que se vea bien en web y móvil (ajustable)
  },
  botonTaTeTi: {
    backgroundColor: "#3b3f50",
    width: 100,
    height: 100,
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  botonReiniciar: {
    backgroundColor: "blue",
    width: 200,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginTop: 20,
  },
  texto: {
    color: "white",
    fontSize: 24,
  },
  textoTurno: {
    color: "white",
    fontSize: 30,
    marginBottom: 20,
  },
});
