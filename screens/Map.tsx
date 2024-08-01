import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import MapView, { Marker } from "react-native-maps";

export default function Map({ route }) {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const { lat, lng } = route.params;
  const region = {
    latitude: lat,
    longitude: lng,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  function selectLocationHandler(event) {
    const lat = event.nativeEvent.coordinate.latitude;
    const lng = event.nativeEvent.coordinate.longitude;
    setSelectedLocation({ lat: lat, lng: lng });
  }

  return (
    <MapView
      style={styles.map}
      initialRegion={region}
      onPress={selectLocationHandler}
    >
      <Marker
        title="Picked location"
        coordinate={{
          latitude: selectedLocation?.lat,
          longitude: selectedLocation?.lng,
        }}
      />
    </MapView>
  );
}

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});
