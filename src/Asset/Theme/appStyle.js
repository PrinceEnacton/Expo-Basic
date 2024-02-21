import { StatusBar, StyleSheet } from "react-native";

export const AppStyleConfig = StyleSheet.create({
  text: {
    width: 200,
    height: 180,
    borderRadius: 20,
    borderColor: "#fff",
    borderWidth: 1,
    marginBottom: 10,
  },
  appbarPedding: {
    marginTop: StatusBar.currentHeight,
  },
});
