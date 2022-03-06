import { StyleSheet, Text, View, Image } from "react-native";
import React, { useState } from "react";
import { baseUrl } from "../stores/instance";
import { HStack, Toast, VStack } from "native-base";
import { FontAwesome5 } from "@expo/vector-icons";
import NumericInput from "react-native-numeric-input";
import cartStore from "../stores/cartStore";

const ProductItem = ({ product }) => {
  const [quantity, setQuantity] = useState(1);

  const handleChange = (e) => {
    setQuantity(e);
  };

  const handleAdd = () => {
    cartStore.addItemToCart(product, quantity);
    Toast.show({
      description: "Added to the cart",
    });
  };

  return (
    <VStack style={styles.card}>
      <Image
        source={{ uri: `${baseUrl}${product.image}` }}
        style={styles.img}
      />
      <HStack
        justifyContent={"space-between"}
        alignItems={"center"}
        padding={3}
      >
        <VStack>
          <Text style={styles.name}>{product.name}</Text>
          <Text style={styles.price}>{product.price}KD</Text>
        </VStack>
        <VStack alignItems="center">
          <NumericInput
            rounded
            totalWidth={70}
            minValue={1}
            maxValue={product.quantity}
            value={quantity}
            onChange={(value) => handleChange(value)}
          />
          <FontAwesome5
            name="cart-plus"
            style={styles.cart}
            onPress={handleAdd}
          />
        </VStack>
      </HStack>
    </VStack>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  card: {
    width: "100%",
    padding: 0,
    backgroundColor: "#fff",
    marginBottom: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    textTransform: "capitalize",
    width: "100%",
    marginBottom: 10,
  },
  img: {
    width: "100%",
    backgroundColor: "#fff",
    height: 200,
    borderBottomWidth: 1,
    borderColor: "#ccc",
  },
  price: {
    // marginBottom: 10,
    fontSize: 13,
  },
  cart: {
    fontSize: 16,
    marginTop: 10,
  },
});
