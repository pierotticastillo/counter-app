import React from "react";
import { TouchableOpacity, Text, StyleSheet, GestureResponderEvent, ViewStyle, TextStyle } from "react-native";

// Definición de las props que acepta el botón
type CustomButtonProps = {
  title: string; // Texto del botón
  onPress: (event: GestureResponderEvent) => void; // Función al presionar
  style?: ViewStyle | ViewStyle[]; // Estilo opcional para el botón
  textStyle?: TextStyle | TextStyle[]; // Estilo opcional para el texto
};

// Componente funcional del botón reutilizable
const CustomButton: React.FC<CustomButtonProps> = ({ title, onPress, style, textStyle }) => (
  <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
    <Text style={[styles.buttonText, textStyle]}>{title}</Text>
  </TouchableOpacity>
);

// Estilos base del botón
const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 25,
    elevation: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default CustomButton;