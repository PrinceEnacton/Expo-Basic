import React, { useState } from "react";
import {
  FlatList,
  Pressable,
  ScrollView,
  SectionList,
  Text,
  TextInput,
  View,
} from "react-native";
import { styles } from "./styles";
// import { ScrollView } from "react-native-virtualized-view";

const Form = () => {
  const [name, setname] = useState("");
  const [age, setage] = useState("");
  const [city, setcity] = useState("");
  const [personList, setperson] = useState([]);

  const DATA = [
    {
      title1: "Main dishes",
      data: ["Pizza", "Burger", "Risotto"],
    },
    {
      title1: "Sides",
      data: ["French Fries", "Onion Rings", "Fried Shrimps"],
    },
    {
      title1: "Drinks",
      data: ["Water", "Coke", "Beer"],
    },
    {
      title1: "Desserts",
      data: ["Cheese Cake", "Ice Cream"],
    },
  ];

  const validateForm = () => {
    // console.log("Person", personList);
    setperson([...personList, { name, age, city }]);
    // console.log("=>> PersonList " + [...personList["name"]]);
    // console.log(personList[0]["name"]);
  };

  function buildTextformField(text, setvalue) {
    return (
      <View style={styles.inputRow}>
        <Text style={styles.title}>{text}</Text>
        <TextInput
          placeholder="Type Here ..."
          style={styles.textInpute}
          onChangeText={(value) => setvalue(value)}
        />
      </View>
    );
  }
  return (
    // <Text>hello</Text>
    // <ScrollView
    //   ref={(scrollView) => {
    //     this.scrollView = scrollView;
    //   }}
    // >
    <View>
      <View style={styles.form}>
        {buildTextformField("Name", setname)}
        {buildTextformField("Age", setage)}
        {buildTextformField("City", setcity)}
      </View>

      <Pressable style={styles.buttonContainer} onPress={() => validateForm()}>
        <Text style={styles.submitText}>Submit</Text>
      </Pressable>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          paddingBottom: 10,
          borderWidth: 1,
        }}
      >
        {DATA.map((item, index) => (
          <View key={index}>
            <Text style={styles.titleListTitle}>{item.title1}</Text>
            <View
              style={{
                // marginRight: 10,
                padding: 10,
                borderLeftWidth: 1,
                borderBottomWidth: 1,
                borderRightWidth: 1,
              }}
            >
              {item.data.map((item, index) => (
                <View key={index}>
                  <Text>{item}</Text>
                </View>
              ))}
            </View>
          </View>
        ))}
      </View>

      {/* <View> */}
      <View style={styles.dataTable}>
        <Text>Name</Text>
        <Text>Age</Text>
        <Text>City</Text>
      </View>

      <FlatList
        // horizontal={true}
        style={{ height: 110 }}
        data={personList}
        renderItem={({ item }) => {
          // console.log("Item", item);
          return (
            <View style={styles.dataTable}>
              <Text>{item?.name}</Text>
              <Text>{item?.age}</Text>
              <Text>{item?.city}</Text>
            </View>
          );
        }}
        keyExtractor={(index) => index.toString()}
        // numColumns={1}
        scrollEnabled
      />
      <View>
        <SectionList
          // horizontal
          sections={DATA}
          rendeItem={({ item }) => (
            <View>
              <Text>{item}</Text>
            </View>
          )}
          renderSectionHeader={({ section: { title1 } }) => (
            <View>
              <Text style={styles.titleListTitle}>{title1}</Text>
            </View>
          )}
        />
      </View>
      <View style={{ height: 100 }}></View>
    </View>

    // </ScrollView>
  );
};

export default Form;
