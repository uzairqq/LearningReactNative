import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ImageDetails from "../../components/ImageDetails";

const ImageScreen = () => {
  return (
    <View>
      <ImageDetails title="Forest" image="Image1" />
      <ImageDetails title="Mountain" image="Image2" />
      <ImageDetails title="Sea Side" image="Image3" />
      <ImageDetails title="Beach" image="Image4" />
    </View>
  );
};

export default ImageScreen;

const styles = StyleSheet.create({});
