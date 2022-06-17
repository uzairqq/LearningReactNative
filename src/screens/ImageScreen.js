import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ImageDetails from "../../components/ImageDetails";

const ImageScreen = () => {
  return (
    <View>
      <ImageDetails
        title="Forest"
        imageSource={require("../../assets/forest.jpg")}
      />
      <ImageDetails
        title="Mountain"
        imageSource={require("../../assets/mountain.jpg")}
      />
      <ImageDetails
        title="Beach"
        imageSource={require("../../assets/beach.jpg")}
      />
    </View>
  );
};

export default ImageScreen;

const styles = StyleSheet.create({});
