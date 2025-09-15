import React from "react";
import { Text, StyleSheet } from "react-native";

interface CounterDisplayProps {
  count: number;
}

export const CounterDisplay: React.FC<CounterDisplayProps> = ({ count }) => {
  return (
    <>
      <Text style={styles.title}>¡Contador!</Text>
      <Text style={styles.counter}>{count}</Text>
    </>
  );
};

const styles = StyleSheet.create({
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
});
