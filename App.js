import { SafeAreaView, StatusBar, StyleSheet } from "react-native";
import HomeScreen from "./src/Screen/Home/index";

export default function App() {
  return (
    <SafeAreaView>
      <HomeScreen style={styles.appbarPedding} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  appbarPedding: {
    marginTop: StatusBar.currentHeight,
  },
});
