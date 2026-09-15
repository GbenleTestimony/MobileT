import MyButton from "@/src/components/Button1";
import { useRouter } from "expo-router";
import { ImageBackground, StyleSheet, Text, View } from "react-native";

export default function Index() {
  const router = useRouter();

  function SignUpScreenOn() {
    router.push({ pathname: "/(auth)/login" });
  }
  function LoginScreenOn() {
    router.push({ pathname: "/(tabs)/Chats" });
  }
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/myImages/backgroundImg1.jpg")}
        resizeMode="cover"
        style={styles.backgroundImage}
      >
        <Text
          style={{
            fontSize: 30,
            fontWeight: "bold",
            color: "black",
            opacity: 1,
            margin: 20,
          }}
        >
          Hello!
        </Text>

        <View style={styles.smallContainer}>
          <MyButton onPress={SignUpScreenOn} label={"signup"} />
          <MyButton onPress={LoginScreenOn} label={"login"} />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
  },
  smallContainer: {
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 300,
    height: 300,
    borderRadius: 20,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
