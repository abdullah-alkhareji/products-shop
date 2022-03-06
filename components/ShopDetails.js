import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import shopStore from "../stores/shopStore";
import { baseUrl } from "../stores/instance";
import ProductList from "./ProductList";
import Header from "./Header";
import { HStack, VStack } from "native-base";

const ShopDetails = ({ route }) => {
  const { shop } = route.params;
  return (
    <>
      <Header title={shop.name} />
      <SafeAreaView style={styles.container}>
        <VStack style={styles.header}>
          <Image
            source={{ uri: `${baseUrl}${shop.image}` }}
            style={styles.img}
          ></Image>
          <VStack>
            <Text style={styles.name}>{shop.name}</Text>
            <Text style={styles.owner}>By: {shop.owner.username}</Text>
          </VStack>
        </VStack>
        <View style={styles.body}>
          <ProductList products={shop.products} />
        </View>
      </SafeAreaView>
    </>
  );
};

export default ShopDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    // backgroundColor: "#fff",
  },
  header: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#aaa",
  },
  img: {
    width: 80,
    height: 80,
    marginBottom: 10,
    borderRadius: 10,
    borderWidth: 0.2,
    borderColor: "#aaa",
    backgroundColor: "#fff",
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    textTransform: "capitalize",
    textAlign: "center",
  },
  owner: {
    fontSize: 15,
    textTransform: "capitalize",
    color: "#aaa",
    textAlign: "center",
  },
  body: {
    flex: 4,
  },
});
