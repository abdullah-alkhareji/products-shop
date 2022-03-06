import { StyleSheet, Text, View, Alert } from "react-native";
import React from "react";
import { Button } from "native-base";
import ShopList from "./ShopList";
import { observer } from "mobx-react";

const Home = ({ navigation }) => {
  const handlePress = () => {
    Alert.alert("Hello");
  };
  return (
    <>
      <View style={styles.btn}>
        <Button
          colorScheme="light"
          onPress={() => navigation.navigate("Shops")}
        >
          Click Me
        </Button>
      </View>
      {/* 
      <View style={styles.list}>
        <ShopList />
      </View> */}
    </>
  );
};

export default observer(Home);

const styles = StyleSheet.create({
  btn: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  list: {
    flex: 1,
    width: "100%",
    marginTop: 20,
    padding: 10,
  },
});
