import React from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";

const HomeScreen = () => {
  return (
    <View>
      <Text>Hi There!</Text>
      <Button
        onPress={() => console.log("Button Pressed Component Screen")}
        title="Go To Component Screen"
      />
      <Button
        onPress={() => console.log("Button Pressed List Screen Component")}
        title="Go To List Screen Component"
      />
      <TouchableOpacity onPress={() => console.log("Click Me Pressed")}>
        <Text>Click Me!!</Text>
      </TouchableOpacity>
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
