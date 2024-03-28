import { ScrollView, StatusBar } from "react-native";
import HomeScreen from "../src/Screen/Home/index";

export default function App() {
  return (
    <ScrollView>
      <StatusBar hidden={false} />
      <HomeScreen />
    </ScrollView>
  );
}
