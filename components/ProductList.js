import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import ProductItem from "./ProductItem";
import { VStack } from "native-base";

const ProductList = ({ products }) => {
  const productList = products.map((product) => (
    <ProductItem key={product._id} product={product} />
  ));
  return (
    <ScrollView style={styles.container}>
      <View style={styles.scroll}>{productList}</View>
    </ScrollView>
  );
};

export default ProductList;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
  },
  scroll: {
    width: "100%",
  },
});
