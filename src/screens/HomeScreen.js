import React from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";

const HomeScreen = (props) => {
  console.log(props.navigation);
  return (
    <View>
      <Text>Hi There!</Text>

      <TouchableOpacity onPress={() => props.navigation.navigate("Components")}>
        <Text>Click Components Screen</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => props.navigation.navigate("ListScreen")}>
        <Text>Click List Screen Component</Text>
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
