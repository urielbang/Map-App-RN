import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function PlaceItem({ place, onSelect }) {
  return (
    <Pressable onPress={onSelect}>
      <Image source={{ uri: place.imageUri }} />
      <View>
        <Text>{place.title}</Text>
        <Text>{place.Address}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({});
