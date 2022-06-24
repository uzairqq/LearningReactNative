import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const ColorScreen = () => {
  const [color, setColor] = useState([]);
  console.log(color);

  return (
    <View>
      <Button
        title="Add a Color"
        onPress={() => {
          setColor([...color, randomRgb()]);
        }}
      />
      <View
        style={{ height: 100, width: 100, backgroundColor: randomRgb() }}
      ></View>
    </View>
  );
};

const randomRgb = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `rgb(${red},${blue},${green})`;
};

const styles = StyleSheet.create({});

export default ColorScreen;
