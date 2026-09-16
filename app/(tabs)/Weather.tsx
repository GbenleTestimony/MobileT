import {
  CameraType,
  CameraView,
  FlashMode,
  useCameraPermissions,
} from "expo-camera";
import { File } from "expo-file-system";
import * as MediaLibrary from "expo-media-library";
import { Asset, requestPermissionsAsync } from "expo-media-library";
import { useRouter } from "expo-router";
import { useRef, useState } from "react";
import {
  Alert,
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Weather() {
  const [permission, requestPermission] = useCameraPermissions();
  const [facing, setFacing] = useState<CameraType>("back");
  const [flash, setFlash] = useState<FlashMode>("off");
  const cameraRef = useRef<CameraView>(null);
  const [libraryPermission, requestLibraryPermission] =
    MediaLibrary.usePermissions();

  const router = useRouter();

  if (!permission) {
    return <View />;
  }
  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>
          We need your permission to show the camera
        </Text>
        <Button onPress={requestPermission} title="Grant Permission"></Button>
      </View>
    );
  }

  function toggleCameraFacing() {
    setFacing((current) => (current === "back" ? "front" : "back"));
  }

  function toggleFlash() {
    setFlash((current) => (current === "off" ? "on" : "off"));
  }

  async function takeAndSavePicture() {
    if (cameraRef.current) {
      const options = { quality: 0.8, skipProcessing: false };
      const photo = await cameraRef.current.takePictureAsync(options);
      console.log("photo captured", photo.uri);

      try {
        // const targetFile = new FileSystem.getInfoAsync(photo.uri);
        const targetFile = new File(photo.uri);
        if (!targetFile) {
          Alert.alert("uri to storage not available");
        }

        // const { status } = await MediaLibrary.requestPermissionsAsync();
        const { status } = await requestPermissionsAsync();
        if (status !== "granted") {
          Alert.alert("We actually need access to your photo gallery");
        }
        if (status === "granted") {
          await Asset.create(photo.uri);
        }
        // await MediaLibrary.createAssetAsync(photo.uri);

        // Alert.alert("The picture has been saved to your phone!");
      } catch (error) {
        console.error("Execution Failed", error);
        Alert.alert("An error occurred while moving the file to your gallery");
      }
      // let status = libraryPermission?.status;
      // if (status !== "granted") {
      //   const request = await requestLibraryPermission();
      //   status = request.status;
      // }

      // if (status === "granted"){
      //   await MediaLibrary.saveToLibraryAsync
      // }
    }
  }
  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}> What's the weather in Ado Ekiti</Text>
      <Pressable
        style={({ pressed }) => [
          { opacity: pressed ? 0.5 : 1.0 },
          { width: 100, height: 30, backgroundColor: "black" },
          { display: "flex", justifyContent: "center", alignItems: "center" },
          {
            borderRadius: 20,
          },
        ]}
      >
        <Text style={styles.omo}>Hello</Text>
      </Pressable> */}
      <CameraView
        style={styles.camera}
        flash={flash}
        facing={facing}
        ref={cameraRef}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={toggleCameraFacing} style={styles.button}>
          <Text style={styles.text}>Flip</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={takeAndSavePicture}
          style={styles.captureButton}
        >
          <View style={styles.innerCaptureButton}></View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={toggleFlash}>
          <Text>Flash:{flash}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    justifyContent: "center",
  },
  message: {
    textAlign: "center",
    paddingBottom: 10,
    fontSize: 15,
  },
  camera: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  omo: {
    color: "white",
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "transparent",
    // justifyContent: "space-around",
    justifyContent: "flex-end",
    ...StyleSheet.absoluteFill,
    alignItems: "flex-end",
    marginBottom: 40,
  },
  button: {
    padding: 15,
    backgroundColor: "rgba(0,0,0,0.5)",
    borderRadius: 10,
  },
  captureButton: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 4,
    borderColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  innerCaptureButton: {
    width: 54,
    height: 54,
    borderRadius: 27,
    backgroundColor: "white",
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
});
