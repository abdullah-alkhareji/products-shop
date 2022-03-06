import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider } from "native-base";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import RootNavigator from "./components/Navigation";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./components/Home";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ShopList from "./components/ShopList";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <RootNavigator />
        <StatusBar style="auto" />
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
});
