import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-web";

export default function App() {
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
