import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ComponentScreen from "./ComponentScreen";

const HomeScreen = () => {
  return (
    <View>
      <Text style={styles.text}>HomeScreen</Text>
      <ComponentScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
