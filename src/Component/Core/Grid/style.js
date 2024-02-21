import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";

const screenWidth = Dimensions.get("window").width;

export const styles = StyleSheet.create({
  block: {
    backgroundColor: "red",
    margin: 3,
  },
  imgBackGround: {
    height: 100,
    width: screenWidth / Math.floor(screenWidth / 100) - 6,
  },
});
