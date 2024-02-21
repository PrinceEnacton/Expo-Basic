import { StyleSheet } from "react-native";
import { ColorConfig } from "../../../Asset/Theme/colors";

export const CustomButtonStyle = StyleSheet.create({
  activeradioBtn: {
    height: 12,
    width: 12,
    borderRadius: 100,
    backgroundColor: "#000",
  },
  buttonText: {
    color: ColorConfig.white,
    fontWeight: "900",
    fontSize: 20,
  },
  deactiveradioBtn: {
    // padding: 10,
    height: 24,
    width: 24,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  nativeButton: {
    height: 100,
    width: 100,
  },
  radioBtnBlock: {
    // margin: 10,
    flexDirection: "row",
  },
  radiotext: {
    paddingRight: 10,
  },
  touchableOpecity: {
    borderWidth: 2,
    borderColor: ColorConfig.yellow,
    backgroundColor: ColorConfig.secondary,
    height: 50,
    width: 70,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
});
