import { Alert, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import cartStore from "../stores/cartStore";
import CartItem from "./CartItem";
import Header from "./Header";
import { observer } from "mobx-react";
import { Button, VStack } from "native-base";
import authStore from "../stores/authStore";

const CartList = () => {
  const user = authStore.user;

  const handleCheckout = () => {
    cartStore.chechout(user);
    Alert.alert("Thanks for purchasing with us ");
  };

  const cartList = cartStore.items.map((item) => (
    <CartItem
      product={item.product}
      quantity={item.quantity}
      key={item.product._id}
    />
  ));
  return (
    <>
      <Header title="Cart" />
      <VStack>{cartList}</VStack>
      {cartList.length > 0 && (
        <Button
          mt={2}
          mx={2}
          variant="solid"
          colorScheme="blue"
          onPress={handleCheckout}
        >
          Checkout
        </Button>
      )}
    </>
  );
};

export default observer(CartList);

const styles = StyleSheet.create({});
