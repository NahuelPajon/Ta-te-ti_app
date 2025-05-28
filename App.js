import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-web";

export default function App() {
  const [tablero, setTablero] = useState(Array(9).fill(null));
  const [turnoActual, setTurnoActual] = useState('X');
  const [ganador, setGanador] = useState(null);

  const combinaciones = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const verificarSiGano = tablero => {
    for (let [a, b, c] of combinaciones) {
      if (tablero[a] && tablero[a] === tablero[b] && tablero[a] === tablero[c]) {
        return tablero[a];
      }
    }
    return tablero.every(celda => celda) ? 'Empate' : null;
  };

  return (
    <View style={styles.container}>
      <View>
        <Button styles={styles.botoncito}></Button>
        <Button styles={styles.botoncito}></Button>
        <Button styles={styles.botoncito}></Button>
      </View>
      <View>
        <Button styles={styles.botoncito}></Button>
        <Button styles={styles.botoncito}></Button>
        <Button styles={styles.botoncito}></Button>
      </View>
      <View>
        <Button styles={styles.botoncito}></Button>
        <Button styles={styles.botoncito}></Button>
        <Button styles={styles.botoncito}></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  botoncito: {
    borderColor: "black",
    color: "white",
    padding: 20,
    width: 200,
    height: 200,
  },
  filas: {
    flexDirection: "row",
    justifyContent: "space-between",
  },    
});
