import { StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import PlaceForm from "../components/places/PlaceForm";
import { useNavigation } from "@react-navigation/native";

export default function AddPlace({ navigation }) {
  function createPlaceHandler(place) {
    navigation.navigate("AllPlaces", {
      place: place,
    });
  }
  return <PlaceForm createPlaceHandler={createPlaceHandler} />;
}

const styles = StyleSheet.create({});
