// src/components/LoadButton.tsx
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  TouchableOpacityProps,
} from "react-native";
import { JSX } from "react";

interface LoadButtonProps extends TouchableOpacityProps {
  title?: string;
  variant?: "primary" | "secondary" | "danger";
}

export function LoadButton({
  title = "Carregar",
  variant = "primary",
  style,
  ...rest
}: LoadButtonProps): JSX.Element {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        styles[variant],
        rest.disabled && styles.disabled,
        style,
      ]}
      {...rest}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

// ✅ CORREÇÃO: Estava Stylesheet, agora é StyleSheet
const styles = StyleSheet.create({
  button: {
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    marginVertical: 8,
    width: "100%",
  },
  primary: {
    backgroundColor: "#2196F3",
  },
  secondary: {
    backgroundColor: "#FF9800",
  },
  danger: {
    backgroundColor: "#f44336",
  },
  disabled: {
    opacity: 0.6,
  },
  text: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
