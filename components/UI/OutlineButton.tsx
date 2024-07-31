import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import React from "react";
import { Colors } from "../../constants/colors";

export default function OutlineButton({ onPress, icon, children }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Ionicons
        style={styles.icon}
        name={icon}
        size={18}
        color={Colors.primary500}
      />
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    margin: 4,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: Colors.primary500,
    flexDirection: "row",
  },
  icon: {
    marginRight: 6,
  },
  text: {
    color: Colors.primary500,
  },
});
