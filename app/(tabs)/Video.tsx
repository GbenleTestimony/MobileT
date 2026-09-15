import { useVideoPlayer, VideoView } from "expo-video";
import { useRef } from "react";
import { Dimensions, StyleSheet, View } from "react-native";

export default function Updates() {
  const { height, width } = Dimensions.get("window");
  const videoRef = useRef(null);
  const player = useVideoPlayer(
    {
      uri: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
    (player) => {
      player.loop = true;
      player.muted = true;
      player.play();
    },
  );
  return (
    <View
      style={{
        flex: 1,
        // justifyContent: "center",
        // alignItems: "center",
        // backgroundColor: "gray",
      }}
    >
      <VideoView
        player={player}
        style={styles.bgVideo}
        allowsPictureInPicture={false}
        nativeControls={false}
      />
      <View
        style={{ flex: 1, backgroundColor: "rgba(255, 255, 255, 0.5)" }}
      ></View>
      {/* <View style={styles.container}>
        <Text style={styles.title}>Videos and Images Here</Text>
      </View> */}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    zIndex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  bgVideo: {
    flex: 1,
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    resizeMode: "cover",
    aspectRatio: 9 / 16,
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
  video: {
    width: "100%",
    height: "100%",
  },
});
