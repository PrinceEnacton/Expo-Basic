import { StatusBar, View } from "react-native";
import HomeScreen from "../src/Screen/Home/index";

export default function App() {
  return (
    <View>
      {/* <Text>hello</Text> */}
      <StatusBar hidden={false} />
      <HomeScreen />
    </View>
  );
}
