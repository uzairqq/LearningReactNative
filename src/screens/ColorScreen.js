import React, { useState } from "react";
import { View, FlatList, StyleSheet, Button } from "react-native";

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

      <FlatList
        data={color}
        keyExtractor={(item) => item}
        renderItem={({ item }) => {
          return (
            <View
              style={{ height: 100, width: 100, backgroundColor: item }}
            ></View>
          );
        }}
      />
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
