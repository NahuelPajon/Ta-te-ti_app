import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

// const Board = () => {
//   const [board, setBoard] = useState(Array(9).fill(null));
//   const [isXTurn, setIsXTurn] = useState(true);
//   const [winner, setWinner] = useState(null);
//   const [draw, setDraw] = useState(false);

//   const checkWinner = () => {
//     //... Implementar la lógica para verificar ganador (ejemplo: [0, 1, 2], [3, 4, 5], etc.)
//   };

//   const handlePress = (index) => {
//     if (board[index] || winner) return; // No hacer nada si ya hay una jugada o hay un ganador
//     const newBoard = [...board];
//     newBoard[index] = isXTurn ? "X" : "O";
//     setBoard(newBoard);
//     setIsXTurn(!isXTurn);
//     checkWinner();
//   };
// };


