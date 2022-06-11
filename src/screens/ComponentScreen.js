import React from "react";
import { Text, StyleSheet } from "react-native";

const ComponentScreen = () => {
  return <Text style={styles.textSyle}>This is ComponentScreen</Text>;
};

const styles = StyleSheet.create({
  textSyle: {
    fontSize: 40,
    backgroundColor: "orange",
  },
});

export default ComponentScreen;
