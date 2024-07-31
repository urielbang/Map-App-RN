import { Alert, StyleSheet, Text, View } from "react-native";
import React from "react";
import OutlineButton from "../UI/OutlineButton";
import { Colors } from "../../constants/colors";
import {
  getCurrentPositionAsync,
  useForegroundPermissions,
  PermissionStatus,
} from "expo-location";

export default function LocationPicker() {
  const [locationPremission, requestPremission] = useForegroundPermissions();
  async function verifyPermission() {
    if (locationPremission.status === PermissionStatus.UNDETERMINED) {
      const permissionResponse = await requestPremission();
      return permissionResponse.granted;
    }

    if (locationPremission.status === PermissionStatus.DENIED) {
      Alert.alert(
        "Insufficient Permissions!",
        "You need to grant camera permission to use this app"
      );
      return false;
    }

    return true;
  }

  async function getLocationHandler() {
    const hasPremission = await verifyPermission();

    if (!hasPremission) {
      return;
    }

    const location = await getCurrentPositionAsync();

    console.log("====================================");
    console.log(location);
    console.log("====================================");
  }

  function pickOnMapHandler() {}
  return (
    <View>
      <View style={styles.mapPreview}></View>
      <View style={styles.actions}>
        <OutlineButton onPress={getLocationHandler} icon="location">
          Locate User
        </OutlineButton>
        <OutlineButton onPress={pickOnMapHandler} icon="map">
          Pick on Map
        </OutlineButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mapPreview: {
    width: "100%",
    height: 200,
    marginVertical: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary100,
    borderRadius: 4,
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});
