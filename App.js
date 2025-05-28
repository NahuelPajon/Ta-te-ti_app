import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
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

  /*
    Trato de explicar. Básicamente te hacés una copia del tablero y le ponés la nueva jugada, X ó O.
    Luego, te fijás si ese tablero actualizado configura una de las combinaciones para ganar.
    Si lo es, seteás el ganador y a otra cosa mariposa.
    Sino, seteás el próximo turno para el otro jugador.
  */
  const eventoPresionar = indice => {
    if (tablero[indice] || ganador) // Si ya hay un cosito en la celda o hay ganador, no se hace nada
      return;
    const nuevoTablero = [...tablero];
    nuevoTablero[indice] = turnoActual;
    const resultado = verificarSiGano(nuevoTablero);
    setTablero(nuevoTablero);
    if (resultado) {
      setGanador(resultado);
    }
    else {
      setTurnoActual(turnoActual === 'X' ? 'O' : 'X');
    }
  };

  return (
    <View style={styles.container}>
      <Text>Ta te ti</Text>
      <Text>
        {ganador ? ganador === 'Empate' ? 'Empate' : `Ganó ${ganador}` : `Turno de ${turnoActual}`}
      </Text>
      <View style={styles.tablero}>
          <TouchableOpacity 
            style={
              [styles.botoncito, tablero[0] ? tablero[0] === 'X' ? styles.botonX : styles.botonO : null]
            } 
            onPress={() => eventoPresionar(0)}
          >
            <Text 
              style={
                [styles.textoBotoncito, tablero[0] ? tablero[0] === 'X' ? styles.textoX : styles.textoO : null]
              }
            >{tablero[0]}</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={
              [styles.botoncito, tablero[3] ? tablero[3] === 'X' ? styles.botonX : styles.botonO : null]
            } 
            onPress={() => eventoPresionar(3)}
          >
            <Text 
              style={
                [styles.textoBotoncito, tablero[3] ? tablero[3] === 'X' ? styles.textoX : styles.textoO : null]
              }
            >{tablero[3]}</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={
              [styles.botoncito, tablero[6] ? tablero[6] === 'X' ? styles.botonX : styles.botonO : null]
            } 
            onPress={() => eventoPresionar(6)}
          >
            <Text 
              style={
                [styles.textoBotoncito, tablero[6] ? tablero[6] === 'X' ? styles.textoX : styles.textoO : null]
              }
            >{tablero[6]}</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={
              [styles.botoncito, tablero[1] ? tablero[1] === 'X' ? styles.botonX : styles.botonO : null]
            } 
            onPress={() => eventoPresionar(1)}
          >
            <Text 
              style={
                [styles.textoBotoncito, tablero[1] ? tablero[1] === 'X' ? styles.textoX : styles.textoO : null]
              }
            >{tablero[1]}</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={
              [styles.botoncito, tablero[4] ? tablero[4] === 'X' ? styles.botonX : styles.botonO : null]
            } 
            onPress={() => eventoPresionar(4)}
          >
            <Text 
              style={
                [styles.textoBotoncito, tablero[4] ? tablero[4] === 'X' ? styles.textoX : styles.textoO : null]
              }
            >{tablero[4]}</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={
              [styles.botoncito, tablero[7] ? tablero[7] === 'X' ? styles.botonX : styles.botonO : null]
            } 
            onPress={() => eventoPresionar(7)}
          >
            <Text 
              style={
                [styles.textoBotoncito, tablero[7] ? tablero[7] === 'X' ? styles.textoX : styles.textoO : null]
              }
            >{tablero[7]}</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={
              [styles.botoncito, tablero[2] ? tablero[2] === 'X' ? styles.botonX : styles.botonO : null]
            } 
            onPress={() => eventoPresionar(2)}
          >
            <Text 
              style={
                [styles.textoBotoncito, tablero[2] ? tablero[2] === 'X' ? styles.textoX : styles.textoO : null]
              }
            >{tablero[2]}</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={
              [styles.botoncito, tablero[5] ? tablero[5] === 'X' ? styles.botonX : styles.botonO : null]
            } 
            onPress={() => eventoPresionar(5)}
          >
            <Text 
              style={
                [styles.textoBotoncito, tablero[5] ? tablero[5] === 'X' ? styles.textoX : styles.textoO : null]
              }
            >{tablero[5]}</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={
              [styles.botoncito, tablero[8] ? tablero[8] === 'X' ? styles.botonX : styles.botonO : null]
            } 
            onPress={() => eventoPresionar(8)}
          >
            <Text 
              style={
                [styles.textoBotoncito, tablero[8] ? tablero[8] === 'X' ? styles.textoX : styles.textoO : null]
              }
            >{tablero[8]}</Text>
          </TouchableOpacity>
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
    padding: 20,
  },
  tablero: {
    width: 500,
    height: 500,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  botoncito: {
    width: '32%',
    height: '32%',
    margin: 1,
    borderRadius: 18,
    backgroundColor: '#908f8f',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textoBotoncito: {
    fontSize: 64,
    color: '#849cec',
    fontWeight: 800,
    textShadow: '0px 1px 6px rgba(0,0,0,0.6)'
  },
  botonX: {
    backgroundColor: '#313a55',
  },
  botonO: {
    backgroundColor: '#6d322e',
  },
  textoX: {
    color: '#849cec',
  },
  textoO: {
    color: '#f37068',
  }
});
