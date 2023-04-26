import "react-native-gesture-handler";
import { StatusBar } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./screens/navigator/AppNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <AppNavigator />
      <StatusBar barStyle={"light-content"} />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
