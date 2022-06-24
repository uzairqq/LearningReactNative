import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const ColorScreen = () => {
  return (
    <View>
      <Button title="Add a Color" />
      <View
        style={{ height: 100, width: 100, backgroundColor: randomRgb() }}
      ></View>
    </View>
  );
};

const randomRgb = () => {
  const red = Math.random() * 256;
  const green = Math.random() * 256;
  const blue = Math.random() * 256;
  return `rgb(${red},${blue},${green})`;
};

const styles = StyleSheet.create({});

export default ColorScreen;
