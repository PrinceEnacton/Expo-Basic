import { StyleSheet } from "react-native";
import { ColorConfig } from "../../../Asset/Theme/colors";

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
    backgroundColor: ColorConfig.yellow,
  },
});
