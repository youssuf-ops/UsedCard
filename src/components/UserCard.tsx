// src/components/UserCard.tsx
import { useState } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import { JSX } from "react";
import { LoadButton } from "./LoadButton"; // ✅ Certifique-se do caminho
import { UserInfo } from "./UserInfo"; // ✅ Certifique-se do caminho
import { User } from "../types/user.interface";
import { UserRole } from "../types/user.enum";

// ✅ Exportação correta
export function UserCard(): JSX.Element {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleLoadUser = () => {
    setIsLoading(true);

    setTimeout(() => {
      const loadedUser: User = {
        id: 1,
        name: "João Silva",
        age: 28,
        status: "ativo",
        role: UserRole.ADMIN,
        email: "joao.silva@email.com",
      };

      setUser(loadedUser);
      setIsLoading(false);
      Alert.alert("✅ Sucesso", "Usuário carregado com sucesso!");
    }, 1000);
  };

  const handleClearUser = () => {
    setUser(null);
  };

  return (
    <View style={styles.card}>
      <Text style={styles.title}>User Card</Text>

      <LoadButton
        title={isLoading ? "⏳ Carregando..." : "🔄 Carregar Usuário"}
        onPress={handleLoadUser}
        disabled={isLoading}
      />

      {user && (
        <LoadButton
          title="🗑️ Limpar"
          onPress={handleClearUser}
          variant="danger"
        />
      )}

      {isLoading ? (
        <Text style={styles.loadingText}>⏳ Carregando usuário...</Text>
      ) : user ? (
        <UserInfo user={user} />
      ) : (
        <Text style={styles.emptyText}>
          👤 Clique em "Carregar" para ver os dados
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 16,
    backgroundColor: "#f2f2f2",
    borderRadius: 8,
    margin: 16,
  },
  title: {
    fontSize: 18,
    marginBottom: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  loadingText: {
    textAlign: "center",
    color: "#666",
    marginTop: 8,
    fontSize: 16,
  },
  emptyText: {
    textAlign: "center",
    color: "#999",
    marginTop: 8,
    fontStyle: "italic",
    fontSize: 16,
  },
});
