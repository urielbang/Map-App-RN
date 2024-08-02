import { StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import PlaceForm from "../components/places/PlaceForm";
import { useNavigation } from "@react-navigation/native";

export default function AddPlace({ route }) {
  const navigation = useNavigation();

  return <PlaceForm />;
}

const styles = StyleSheet.create({});
