import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import useTicTacToe from "./useTictactoe"; // importamos el hook personalizado

export default function App() {
  const { turno, casillas, manejarPresion, reiniciarJuego, contadorO, contadorX } = useTicTacToe();

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
      <View>
        <Text style={styles.texto}>X: {contadorX}</Text>
        <Text style={styles.texto}>O: {contadorO}</Text>
      </View>
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
