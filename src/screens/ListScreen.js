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
        keyExtractor={(freind) => freind.name}
        data={data}
        renderItem={(element) => {
          return (
            <Text style={styles.textStyle} key={element.item.key}>
              {element.item.name}
            </Text>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontWeight: "bold",
    marginVertical: 50,
  },
});

export default ListScreen;
