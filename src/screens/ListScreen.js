import React from "react";
import { Text, View, StyleSheet } from "react-native";

const ListScreen = () => {
  return (
    <View>
      <Text style={styles.textStyle}>List Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontWeight: "bold",
  },
});

export default ListScreen;
