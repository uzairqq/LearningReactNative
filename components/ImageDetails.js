import React from "react";
import { Text, View, StyleSheet } from "react-native";

const ImageDetails = ({ title, image }) => {
  return (
    <View>
      <Text>
        {title}--{image}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageDetails;
