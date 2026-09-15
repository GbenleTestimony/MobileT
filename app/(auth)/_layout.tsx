import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { View } from "react-native";

SplashScreen.preventAutoHideAsync;

export default function AuthLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        headerTintColor: "white",
      }}
    >
      <Stack.Screen
        name="login"
        options={{
          headerShown: true,
          headerBackground() {
            return (
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  width: "100%",
                  height: "100%",
                  backgroundColor: "black",
                }}
              ></View>
            );
          },
          headerTransparent: true,
          title: "",
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen
        name="register"
        options={{ headerShown: true, title: "SignUp" }}
      />
      <Stack.Screen
        name="Forgot-password"
        options={{ headerShown: false, title: "Forgot-Password" }}
      />
    </Stack>
  );
}
