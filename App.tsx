import { StyleSheet, Text, View } from "react-native";
import { UserCard } from "./src/components/UserCard";

export default function App() {
  return (
    <View style={styles.container}>
      <UserCard />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    padding: 16,
  },
});
