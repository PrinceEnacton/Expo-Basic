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
    setperson([...personList, { name: name, age: age, city: city }]);
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
        <View>
          <Text style={styles.titleListTitle}>{item.title1}</Text>
          {item.data.map((item, index) => (
            <View>
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

        erStyle
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

const styles = StyleSheet.create({
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.secondary,
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    width: 60,
    borderRadius: 10,
    alignSelf: "center",
    marginTop: 10,
  },
  dataTable: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  form: {
    // flex:1,
    padding: 30,
    // paddingLeft:10,
    borderWidth: 1,
    // alignItems: "center",
    // justifyContent: "center",
  },
  inputRow: {
    backgroundColor: "yellow",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  submitButton: {
    // flex:1,
    backgroundColor: COLORS.secondary,
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    width: 60,
    borderRadius: 10,
  },
  submitText: {
    fontSize: 14,
    color: "#FFFF",
  },
  title: {
    // height:50,
    fontSize: 20,
    justifyContent: "center",
    alignItems: "center",
    // alignContent:"center",
  },
  titleListTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  textInpute: {
    borderWidth: 2,
    height: 50,
    width: 200,
    padding: 10,
    backgroundColor: COLORS.yellow,
  },
});
