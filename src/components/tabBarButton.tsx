import {
  GestureResponderEvent,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

interface CustomTabButtonProps {
  label: string;
  children?: React.ReactNode;
  onPress?: (e: GestureResponderEvent) => void;
  AccessibilityState?: { selected: boolean };
}
export default function CustomTabButton({
  label,
  children,
  onPress,
  AccessibilityState,
}: CustomTabButtonProps) {
  const isFocused = AccessibilityState;
  return (
    <TouchableOpacity
      onPress={onPress}
      // style={[
      //   styles.buttonContainer,
      //   isFocused ? styles.buttonActive : styles.buttonInactive,
      // ]}
    >
      <View
        style={{
          backgroundColor: "green",
          marginTop: 5,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: 70,

          height: 50,
        }}
      >
        <View
          style={
            true
              ? {
                  width: 70,
                  height: 35,
                  backgroundColor: "red",
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
          <View style={styles.innerContent}>{children}</View>
          <Text
            style={
              isFocused
                ? {
                    textAlign: "center",
                    fontWeight: "bold",
                    backgroundColor: "blue",
                  }
                : { textAlign: "center" }
            }
          >
            {label}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 8,
  },
  buttonActive: {
    backgroundColor: "#e0f2fe",
    borderRadius: 12,
  },
  buttonInactive: {
    backgroundColor: "transparent",
  },
  innerContent: {
    alignItems: "center",
  },
});
