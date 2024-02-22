import { StyleSheet } from "react-native";
import { ColorConfig } from "../../../Asset/Theme/colors";

export const modelStyles = StyleSheet.create({
  modelBody: {
    height: "200",
  },
  openButton: {
    // flex: 1,
    backgroundColor: ColorConfig.primary,
    height: 200,
    width: "50%",
    justifyContent: "center",
  },
  openButtonText: {
    alignSelf: "center",
  },

  modalContainer: {
    height: "100%",
    width: "100%",
    position: "absolute",
    justifyContent: "flex-end",
    bottom: "-5px",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    backgroundColor: "red",
    padding: 20,
    height: "50%",
    width: "100%",
  },
});
