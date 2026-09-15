import { demoUsers } from "@/src/files/users";
import { useRouter } from "expo-router";
import { Pressable, ScrollView, StyleSheet, Text } from "react-native";


export default function Chats() {
  const router = useRouter();
  return (

    <ScrollView
      style={styles.list}
      contentContainerStyle={{
        flexGrow: 1,
        alignItems: "center",
        justifyContent: "flex-start",
      }}
    >
      {demoUsers.map((user) => (
        <Pressable
          key={user.id}
          style={({ pressed }) => [styles.pressable, pressed && styles.active]}
        >
          <Text style={styles.item} key={user.id}>
            {user.name}
          </Text>
        </Pressable>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  item: {
    color: "white",
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    textAlignVertical: "center",
    // backgroundColor: "blue",
    width: "100%",
    height: 60,
    padding: 10,
  },
  list: {
    paddingHorizontal: 20,
    flex: 1,
  },
  pressable: {
    backgroundColor: "black",
    width: "100%",
    borderRadius: 8,
    margin: 5,
  },
  active: {
    backgroundColor: "rgba(0, 0, 0, 0.3)",
  },
});
