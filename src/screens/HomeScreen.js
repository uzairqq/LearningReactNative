import React from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Hi There!</Text>

      <TouchableOpacity onPress={() => navigation.navigate("Components")}>
        <Text>Click Components Screen</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("ListScreen")}>
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
