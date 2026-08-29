// src/components/UserInfo.tsx
import { JSX } from "react";
import { View, Text, StyleSheet } from "react-native";
import { User } from "../types/user.interface";

interface UserInfoProps {
  user: User | null; // ✅ Permite null
}

// ✅ Certifique-se de que está exportando corretamente
export function UserInfo({ user }: UserInfoProps): JSX.Element {
  // ✅ Verificação de segurança ANTES de acessar propriedades
  if (!user) {
    return (
      <View style={styles.container}>
        <Text style={styles.error}>Nenhum dado disponível</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>
        🆔 ID: <Text style={styles.value}>{user.id}</Text>
      </Text>
      <Text style={styles.label}>
        👤 Nome: <Text style={styles.value}>{user.name}</Text>
      </Text>
      <Text style={styles.label}>
        🎂 Idade: <Text style={styles.value}>{user.age} anos</Text>
      </Text>
      <Text style={styles.label}>
        📊 Status: <Text style={styles.value}>{user.status}</Text>
      </Text>
      <Text style={styles.label}>
        🎯 Perfil: <Text style={styles.value}>{user.role}</Text>
      </Text>
      {user.email && (
        <Text style={styles.label}>
          📧 Email: <Text style={styles.value}>{user.email}</Text>
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 12,
    padding: 16,
    backgroundColor: "#fff",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  label: {
    fontSize: 16,
    marginVertical: 4,
    color: "#333",
  },
  value: {
    fontWeight: "bold",
    color: "#000",
  },
  error: {
    color: "#999",
    textAlign: "center",
    fontStyle: "italic",
  },
});
