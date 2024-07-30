import { Alert, Button, StyleSheet, View } from "react-native";
import React from "react";
import {
  launchCameraAsync,
  useCameraPermissions,
  PermissionStatus,
} from "expo-image-picker";

export default function ImagePicker() {
  const [cameraPremissinInfo, requestPremission] = useCameraPermissions();

  async function verifyPremission() {
    if (cameraPremissinInfo.status === PermissionStatus.UNDETERMINED) {
      const premissionRes = await requestPremission();
      return premissionRes.granted;
    }

    if (cameraPremissinInfo.status === PermissionStatus.DENIED) {
      Alert.alert(
        "Insufficient Premissions!",
        "You need to grant camera premission to use this app"
      );
      return false;
    }

    return true;
  }

  async function takeImage() {
    const hasPremission = await verifyPremission();
    if (!hasPremission) {
      return;
    }
    const image = await launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.5,
    });
    console.log(image);
  }
  return (
    <View>
      <View></View>
      <Button title="Take image" onPress={takeImage} />
    </View>
  );
}

const styles = StyleSheet.create({});
