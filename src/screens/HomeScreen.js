import React from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";

const HomeScreen = (props) => {
  console.log(props.navigation);
  return (
    <View>
      <Text>Hi There!</Text>
      <Button
        onPress={() => props.navigation.navigate("Components")}
        title="Go To Component Screen"
      />
      <Button
        onPress={() => props.navigation.navigate("ListScreen")}
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
