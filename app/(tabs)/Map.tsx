import { useRouter } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Calls() {
  const router = useRouter();

  function reachModal() {
    router.push("/modal");
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Let's go to Mozambiaque</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e5e5e5",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
  },
});
