import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Home from "../Home";
import ShopList from "../ShopList";
import ShopDetails from "../ShopDetails";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CartList from "../CartList";
import Signin from "../authentication/Signin";
import Signup from "../authentication/Signup";
const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Shops"
        component={ShopList}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Shop"
        component={ShopDetails}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Cart"
        component={CartList}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Signin"
        component={Signin}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default RootNavigator;

const styles = StyleSheet.create({});
