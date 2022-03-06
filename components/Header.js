import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { HStack } from "native-base";
import CartBtn from "./button/CartBtn";
import BackBtn from "./button/BackBtn";

const Header = ({ title }) => {
  return (
    <SafeAreaView style={styles.container}>
      <HStack style={styles.wrapper}>
        <BackBtn />
        <Text style={styles.title}>{title}</Text>
        <CartBtn />
      </HStack>
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#06f",
    height: 120,
    justifyContent: "flex-end",
    borderBottomEndRadius: 30,
    borderBottomStartRadius: 30,
    marginBottom: 10,
  },
  wrapper: {
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 15,
  },
  title: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 20,
    textTransform: "capitalize",
  },
});
