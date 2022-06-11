import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ComponentScreen from "./ComponentScreen";

const HomeScreen = () => {
  const myName = "Uzair Iqbal";

  return (
    <View>
      <Text style={styles.Title}>Getting Started With React Native!</Text>
      <Text style={styles.subTitle}>My Name is {myName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  Title: {
    fontSize: 45,
  },
  subTitle: {
    fontSize: 20,
  },
});

export default HomeScreen;
