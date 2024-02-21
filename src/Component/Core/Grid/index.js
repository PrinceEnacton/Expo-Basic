import { Dimensions, FlatList, Image, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { AppStyleConfig } from "../../../Asset/Theme/appStyle";
import { deal_data } from "../../../Asset/appDataConfig";
import { styles } from "./style";
import useDimension from "../../../Hooks/use-dimension";

export default function Grid() {
  const [numColumns, setNumColumn] = useState(2);
  // const screenWidth = Dimensions.get("window").width;
  const { screenWidth } = useDimension();

  useEffect(() => {
    const newNumColumns = Math.floor(screenWidth / 100);
    setNumColumn(newNumColumns);
  }, []);

  return (
    <View style={AppStyleConfig.appbarPedding}>
      <FlatList
        data={deal_data}
        key={numColumns}
        renderItem={({ item }) => (
          <View style={styles.block}>
            <Image
              source={{
                uri: item.image,
              }}
              style={styles.imgBackGround}
            />
            <Image
              source={{ uri: item.store.logo }}
              style={{ height: 10, width: 20 }}
            />
            <Text>{item.offer_price}</Text>
            <Text>{item.retail_price}</Text>
          </View>
        )}
        numColumns={numColumns}
      />
    </View>
  );
}
