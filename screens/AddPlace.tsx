import { StyleSheet } from "react-native";
import React from "react";
import PlaceForm from "../components/places/PlaceForm";

export default function AddPlace({ navigation }) {
  function createPlaceHandler(place) {
    navigation.navigate("AllPlaces", {
      place: place,
    });
  }
  return <PlaceForm createPlaceHandler={createPlaceHandler} />;
}

const styles = StyleSheet.create({});
