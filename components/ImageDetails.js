import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

const ImageDetails = ({ title, imageSource }) => {
  return (
    <View>
      <Image source={imageSource} />
      <Text>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageDetails;
