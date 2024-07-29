import { FlatList, StyleSheet } from "react-native";

export default function PlacesList({ Places }) {
  return <FlatList data={Places} keyExtractor={(item) => item.id} />;
}

const styles = StyleSheet.create({});
