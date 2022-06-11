import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  const data = [
    { name: "friend#1" },
    { name: "friend#2" },
    { name: "friend#3" },
    { name: "friend#4" },
    { name: "friend#5" },
    { name: "friend#6" },
    { name: "friend#7" },
    { name: "friend#8" },
  ];

  return (
    <View>
      <FlatList
        data={data}
        renderItem={(element) => {
          return <Text>{element.item.name}</Text>;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontWeight: "bold",
  },
});

export default ListScreen;
