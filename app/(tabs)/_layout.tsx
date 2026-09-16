import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { Text } from "expo-router/build/react-navigation";
import {
  GestureResponderEvent,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "",
        tabBarInactiveTintColor: "black",
        tabBarInactiveBackgroundColor: "white",
        headerShown: true,
        tabBarLabelStyle: {
          fontSize: 15,
        },
        tabBarShowLabel: false,
        tabBarButton: ({ onPress, style, children }) => (
          <TouchableOpacity
            onPress={onPress as (event: GestureResponderEvent) => void}
            style={style}
            activeOpacity={1}
          >
            {children}
          </TouchableOpacity>
        ),
        tabBarStyle: {
          // marginTop:
          height: 110,
          backgroundColor: "#ffffff",
          // borderTopWidth: 1,
          // borderTopColor: "#e5e5e5",
        },
      }}
    >
      <Tabs.Screen
        name="Chats"
        options={{
          title: "Chats",
          headerTitleAlign: "left",
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 25,
          },
          // tabBarBadge: 6,
          tabBarBadgeStyle: {
            color: "white",
            backgroundColor: "gray",
          },
          tabBarIcon: ({ color, focused }) => (
            <View
              style={{
                // backgroundColor: "green",
                marginTop: 30,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 70,
                position: "absolute",
                height: 50,
              }}
            >
              <View
                style={
                  focused
                    ? {
                        width: 70,
                        height: 35,
                        backgroundColor: "rgba(0, 0, 0, 0.2)",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: 20,
                        position: "relative",
                      }
                    : {
                        width: 70,
                        height: 35,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: 20,
                        backgroundColor: "transparent",
                        position: "relative",
                      }
                }
              >
                <Ionicons
                  name={focused ? "chatbubble" : "chatbubble-outline"}
                  size={24}
                  color={color}
                />
              </View>
              <Text
                style={
                  focused
                    ? { textAlign: "center", fontWeight: "bold" }
                    : { textAlign: "center" }
                }
              >
                Chats
              </Text>
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="Map"
        options={{
          // title: "Map",
          headerTitle: () => (
            <View>
              <TextInput placeholder="search..." autoFocus></TextInput>
            </View>
          ),
          headerTitleAlign: "left",
          headerShown: true,
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 25,
          },
          tabBarIcon: ({ color, focused }) => (
            <View
              style={{
                // backgroundColor: "green",
                marginTop: 30,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 70,

                height: 50,
              }}
            >
              <View
                style={
                  focused
                    ? {
                        width: 70,
                        height: 35,
                        backgroundColor: "rgba(0, 0, 0, 0.2)",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: 20,
                      }
                    : {
                        width: 70,
                        height: 35,

                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: 20,
                        backgroundColor: "transparent",
                      }
                }
              >
                <Ionicons
                  name={focused ? "locate" : "locate-outline"}
                  size={24}
                  color={color}
                />
              </View>
              <Text
                style={
                  focused
                    ? { textAlign: "center", fontWeight: "bold" }
                    : { textAlign: "center" }
                }
              >
                Map
              </Text>
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="Video"
        options={{
          title: "Video",
          headerTitleAlign: "left",
          headerShown: true,
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 25,
          },
          tabBarLabel: ({ focused, color }) => (
            <Text
              style={{
                color: color,
                fontSize: 14,
                fontWeight: focused ? "bold" : "normal",
              }}
            >
              Video
            </Text>
          ),
          tabBarIcon: ({ color, focused }) => (
            <View
              style={{
                // backgroundColor: "green",
                marginTop: 30,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 70,

                height: 50,
              }}
            >
              <View
                style={
                  focused
                    ? {
                        width: 70,
                        height: 35,
                        backgroundColor: "rgba(0, 0, 0, 0.2)",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: 20,
                      }
                    : {
                        width: 70,
                        height: 35,

                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: 20,
                        backgroundColor: "transparent",
                      }
                }
              >
                <Ionicons
                  name={focused ? "videocam" : "videocam-outline"}
                  size={24}
                  color={color}
                />
              </View>
              <Text
                style={
                  focused
                    ? { textAlign: "center", fontWeight: "bold" }
                    : { textAlign: "center" }
                }
              >
                Video
              </Text>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="Weather"
        options={{
          headerTitleAlign: "left",
          title: "Weather",
          headerRight: () => (
            // <SafeAreaView>
            <View>
              <Ionicons name={"videocam"} size={20} color={"black"}></Ionicons>
            </View>
            // </SafeAreaView>
          ),
          headerShown: true,
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 25,
          },

          tabBarIcon: ({ color, focused }) => (
            <View
              style={{
                // backgroundColor: "green",
                marginTop: 30,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 70,

                height: 50,
              }}
            >
              <View
                style={
                  focused
                    ? {
                        width: 70,
                        height: 35,
                        backgroundColor: "rgba(0, 0, 0, 0.2)",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: 20,
                      }
                    : {
                        width: 70,
                        height: 35,

                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: 20,
                        backgroundColor: "transparent",
                      }
                }
              >
                <Ionicons
                  name={focused ? "cloud" : "cloud-outline"}
                  size={24}
                  color={color}
                />
              </View>
              <Text
                style={
                  focused
                    ? { textAlign: "center", fontWeight: "bold" }
                    : { textAlign: "center" }
                }
              >
                Weather
              </Text>
            </View>
          ),
        }}
      />
    </Tabs>
  );
}
