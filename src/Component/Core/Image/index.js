import React from "react";
import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, View } from "react-native";

function ImageScreen() {
  return (
    <View style={styles.container}>
      {/* <Image source={require("../../../assets/favicon.png")} /> */}
      <Image
        source={{
          uri: "https://picsum.photos/200/300",
          height: 300,
          width: 200,
        }}
      />
      <StatusBar style="auto" />
    </View>
  );
}

export default ImageScreen;

const styles = StyleSheet.create({
  container: {
    // backgroundColor: colors.white,
    alignItems: "center",
    justifyContent: "center",
  },
});
