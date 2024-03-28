import { Dimensions, StyleSheet } from "react-native";
import { ColorConfig } from "../../../Asset/Theme/colors";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export const styles = StyleSheet.create({
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: ColorConfig.secondary,
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
    // paddingLeft:10,
    borderWidth: 1,
    paddingHorizontal: 14,
    paddingVertical: 15,
    // alignItems: "center",
    // justifyContent: "center",
  },
  inputRow: {
    // backgroundColor: "yellow",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
    padding: 5,
    width: windowWidth * 0.9,
    alignSelf: "center",
  },
  submitButton: {
    // flex:1,
    backgroundColor: ColorConfig.primary,
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    width: 60,
    borderRadius: 10,
  },
  submitText: {
    fontSize: 14,
    color: ColorConfig.white,
  },
  title: {
    // height:50,
    fontSize: 20,
  },
  titleListTitle: {
    fontSize: 20,
    fontWeight: "bold",
    borderWidth: 1,
  },
  textInpute: {
    borderWidth: 1,
    height: (windowHeight * 0.15) / 2,
    width: windowWidth * 0.7,
    backgroundColor: ColorConfig.yellow,
    paddingHorizontal: 8,
  },
});
