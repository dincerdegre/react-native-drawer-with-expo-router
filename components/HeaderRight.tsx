import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

const HeaderRight = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <MaterialIcons name="logout" size={24} color="black" />
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
  },
});
export default HeaderRight;
