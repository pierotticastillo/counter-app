import { StatusBar } from "expo-status-bar";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useCounter } from "./hooks/useCounter";
import { CounterDisplay } from "./components/CounterDisplay";
import { CounterControls } from "./components/CounterControls";
import { appStyles } from "./App.styles";

export default function App() {
  const { count, increment, reset } = useCounter();

  return (
    <LinearGradient
      colors={["#4c669f", "#3b5998", "#192f6a"]}
      style={appStyles.container}
    >
      <CounterDisplay count={count} />
      <CounterControls onIncrement={increment} onReset={reset} />
      <StatusBar style="light" />
    </LinearGradient>
  );
}
