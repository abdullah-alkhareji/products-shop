import { Alert, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Badge } from "native-base";
import cartStore from "../../stores/cartStore";
import { observer } from "mobx-react";
import authStore from "../../stores/authStore";

const CartBtn = () => {
  const navigation = useNavigation();
  const handlePress = () => {
    if (authStore.user) {
      navigation.navigate("Cart");
    } else {
      Alert.alert("Signin", "You are not singed in", [
        {
          text: "Cancel",
          onPress: () => console.log("canceled"),
          style: "cancel",
        },
        { text: "OK", onPress: () => navigation.navigate("Signin") },
      ]);
    }
  };
  return (
    <Pressable onPress={handlePress} width={25}>
      <Badge // bg="red.400"
        colorScheme="red"
        rounded="full"
        padding={0}
        variant="solid"
        _text={{ fontSize: 9, fontWeight: "bold", textAlign: "center" }}
        style={styles.badge}
      >
        {cartStore.totalQuantity}
      </Badge>
      <Feather name="shopping-cart" size={20} style={styles.btn} />
    </Pressable>
  );
};

export default observer(CartBtn);

const styles = StyleSheet.create({
  btn: {
    color: "#fff",
  },
  badge: {
    position: "absolute",
    width: 20,
    height: 20,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 10,
    top: -20,
    right: 3,
  },
});
