import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React from "react";
import { baseUrl } from "../stores/instance";
import { VStack } from "native-base";

const ShopItem = ({ shop, navigation }) => {
  return (
    <Pressable
      style={styles.col}
      onPress={() => navigation.navigate("Shop", { shop: shop })}
    >
      <VStack style={styles.card}>
        <Image
          source={{ uri: `${baseUrl}${shop.image}` }}
          style={styles.img}
        ></Image>
        <Text style={styles.name}>{shop.name}</Text>
      </VStack>
    </Pressable>
  );
};

export default ShopItem;

const styles = StyleSheet.create({
  col: {
    width: "50%",
    marginTop: 0,
    alignItems: "center",
    padding: 5,
  },
  card: {
    width: "90%",
    padding: 0,
  },
  name: {
    fontSize: 14,
    textTransform: "capitalize",
    textAlign: "center",
    width: "100%",
    marginTop: 5,
  },
  img: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 10,
    height: 150,
    resizeMode: "cover",
    overflow: "hidden",
  },
});
