import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import CustomButton from "./components/CustomButton"; // Importa el botón reutilizable

export default function App() {
  // Hook de estado para el contador
  const [count, setCount] = useState(0);

  return (
    // Fondo con gradiente de colores
    <LinearGradient
      colors={["#4c669f", "#3b5998", "#192f6a"]}
      style={styles.container}
    >
      {/* Título de la app */}
      <Text style={styles.title}>¡Contador!</Text>
      {/* Muestra el valor actual del contador */}
      <Text style={styles.counter}>{count}</Text>
      {/* Botón para incrementar el contador */}
      <CustomButton
        title="+ 1"
        onPress={() => setCount(count + 1)}
        style={[styles.button, styles.incrementButton]}
        textStyle={styles.buttonText}
      />
      {/* Botón para resetear el contador a 0 */}
      <CustomButton
        title="Reset"
        onPress={() => setCount(0)}
        style={[styles.button, styles.resetButton]}
        textStyle={[styles.buttonText, styles.resetButtonText]}
      />
      {/* Barra de estado con estilo claro */}
      <StatusBar style="light" />
    </LinearGradient>
  );
}

// Estilos para los componentes
const styles = StyleSheet.create({
  container: {
    flex: 1, // Ocupa toda la pantalla
    alignItems: "center", // Centra horizontalmente
    justifyContent: "center", // Centra verticalmente
  },
  title: {
    fontSize: 32,
    color: "#fff",
    fontWeight: "bold",
    marginBottom: 20,
  },
  counter: {
    fontSize: 60,
    color: "#fff",
    marginBottom: 30,
  },
  button: {
    position: "absolute", // Posiciona de forma absoluta en la pantalla
    bottom: 40, // 40px desde abajo
  },
  incrementButton: {
    right: 30, // 30px desde la derecha
    backgroundColor: "#fff",
    borderRadius: 25,
  },
  resetButton: {
    left: 30, // 30px desde la izquierda
    backgroundColor: "#ff5252",
    borderRadius: 25,
  },
  buttonText: {
    color: "#3b5998",
    fontSize: 20,
    fontWeight: "bold",
  },
  resetButtonText: {
    color: "#fff",
  },
});
