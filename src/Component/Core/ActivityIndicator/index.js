import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { AppStyleConfig } from "../../../Asset/Theme/appStyle";
import { ColorConfig } from "../../../Asset/Theme/colors";

async function waitForTwoSecond() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
}

const CustomActivityIndicator = () => {
  const [loding, setLoding] = useState(true);
  useEffect(() => {
    waitForTwoSecond().then((item) => {
      console.log(item);
      setLoding(false);
    });
  }, []);
  return (
    <View style={AppStyleConfig.appbarPedding}>
      {loding ? (
        <View>
          <ActivityIndicator size={"large"} />
          <ActivityIndicator size={"small"} />
          <ActivityIndicator size={"large"} color={ColorConfig.primary} />
        </View>
      ) : (
        <Text>Loding Compelte</Text>
      )}
    </View>
  );
};

export default CustomActivityIndicator;
