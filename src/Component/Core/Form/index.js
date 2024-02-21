import React, { useState } from "react";
import {
  FlatList,
  SectionList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import COLORS from "../../../Asset/Theme/colors";
import { styles } from "./styles";

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
  return (
    // <Text>hello</Text>
    <View>
      <View style={styles.form}>
        <View style={styles.inputRow}>
          <Text style={styles.title}>Name</Text>
          <TextInput
            placeholder="Type Here ..."
            style={styles.textInpute}
            onChangeText={(value) => setname(value)}
          />
        </View>
        <View style={styles.inputRow}>
          <Text style={styles.title}>Age</Text>
          <TextInput
            placeholder="Type Here ..."
            style={styles.textInpute}
            onChangeText={(value) => setage(value)}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.inputRow}>
          <Text style={styles.title}>City</Text>
          <TextInput
            placeholder="Type Here ..."
            style={styles.textInpute}
            onChangeText={(value) => setcity(value)}
          />
        </View>
      </View>

      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => validateForm()}
      >
        <Text style={styles.submitText}>Submit</Text>
      </TouchableOpacity>

      {DATA.map((item, index) => (
        <View key={index}>
          <Text style={styles.titleListTitle}>{item.title1}</Text>
          {item.data.map((item, index) => (
            <View key={index}>
              <Text>{item}</Text>
            </View>
          ))}
        </View>
      ))}
      {/* <View> */}
      <View style={styles.dataTable}>
        <Text>Name</Text>
        <Text>Age</Text>
        <Text>City</Text>
      </View>

      <FlatList
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
        numColumns={1}
        // columnWrapp

        // erStyle
      />

      {/* </View> */}

      <SectionList
        sections={DATA}
        renderItem={({ item }) => (
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
  );
};

export default Form;
