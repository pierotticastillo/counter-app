import React from "react";
import { StyleSheet } from "react-native";
import CustomButton from "./CustomButton";

interface CounterControlsProps {
  onIncrement: () => void;
  onReset: () => void;
}

export const CounterControls: React.FC<CounterControlsProps> = ({
  onIncrement,
  onReset,
}) => {
  return (
    <>
      <CustomButton
        title="+ 1"
        onPress={onIncrement}
        style={[styles.button, styles.incrementButton]}
        textStyle={styles.buttonText}
      />
      <CustomButton
        title="Reset"
        onPress={onReset}
        style={[styles.button, styles.resetButton]}
        textStyle={[styles.buttonText, styles.resetButtonText]}
      />
    </>
  );
};

const styles = StyleSheet.create({
  button: {
    position: "absolute",
    bottom: 40,
  },
  incrementButton: {
    right: 30,
    backgroundColor: "#fff",
    borderRadius: 25,
  },
  resetButton: {
    left: 30,
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
