import { StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import PlacesList from "../components/places/PlacesList";
import { useIsFocused } from "@react-navigation/native";

export default function AllPlaces({ route }) {
  const [places, setPlaces] = useState([]);
  const isFocused = useIsFocused();
  useEffect(() => {
    if (route.params && isFocused) {
      const { place } = route.params;
      setPlaces((curPlaces) => [...curPlaces, place]);
    }
  }, [isFocused, route]);
  return <PlacesList Places={places} />;
}

const styles = StyleSheet.create({});
