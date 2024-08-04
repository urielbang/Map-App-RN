import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useCallback, useState } from "react";
import { Colors } from "../../constants/colors";
import ImagePicker from "./ImagePicker";
import LocationPicker from "./LocationPicker";
import Button from "../UI/Button";

export default function PlaceForm() {
  const [title, setTitle] = useState("");
  const [pickedLocation, setPickedLocation] = useState("");
  const [selectImage, setSelectImage] = useState("");

  const handleChangeText = (text) => {
    setTitle(text);
  };

  const onImageTaken = (imgageUrl) => {
    setSelectImage(imgageUrl);
  };

  const onLocationPick = useCallback((location) => {
    setPickedLocation(location);
  }, []);

  const savePlaceHandler = () => {
    console.log(title);
    console.log(pickedLocation);
    console.log(selectImage);
  };

  return (
    <ScrollView style={styles.form}>
      <View>
        <Text style={styles.label}>Title</Text>
        <TextInput
          style={styles.input}
          onChangeText={handleChangeText}
          value={title}
        />
      </View>
      <ImagePicker onImageTaken={onImageTaken} />
      <LocationPicker onLocationPick={onLocationPick} />
      <Button onPress={savePlaceHandler}>click to state</Button>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  form: {
    flex: 1,
    padding: 24,
  },
  label: {
    fontWeight: "bold",
    marginBottom: 4,
    color: Colors.primary500,
  },
  input: {
    marginVertical: 8,
    paddingHorizontal: 4,
    paddingVertical: 8,
    fontSize: 16,
    borderBottomColor: Colors.primary700,
    backgroundColor: Colors.primary100,
  },
});
