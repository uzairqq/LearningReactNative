import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ComponentScreen from "./ComponentScreen";

const HomeScreen = () => {
  const greeting = <Text>Hi There</Text>;
  const greeting1 = "Hi There 2";
  const arrayCheck = ["123", "456"];

  return (
    <View>
      <Text style={styles.text}>HomeScreen</Text>
      {greeting}
      <Text>{greeting1}</Text>
      <Text>{arrayCheck}</Text>
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
