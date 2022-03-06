import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { Button, HStack, VStack } from "native-base";
import { baseUrl } from "../stores/instance";
import { Ionicons } from "@expo/vector-icons";
import NumericInput from "react-native-numeric-input";
import cartStore from "../stores/cartStore";
import { FontAwesome5 } from "@expo/vector-icons";
import { observer } from "mobx-react";

const CartItem = ({ product, quantity }) => {
  const [qnt, setQnt] = useState(quantity);
  const [editMode, setEditMode] = useState(false);

  const handleChange = (e) => {
    setQnt(e);
  };

  const handleEdit = () => {
    cartStore.editCart(product, qnt);
    setEditMode(false);
  };

  const handleDelete = () => {
    console.log();
    cartStore.removeItemFromCart(product);
  };

  return (
    <HStack style={styles.container}>
      <HStack style={styles.info}>
        <Image source={{ uri: baseUrl + product.image }} style={styles.img} />
        <VStack>
          <Text style={styles.name}>{product.name}</Text>
          <HStack style={styles.price}>
            <Text>{product.price}KD x </Text>
            {editMode ? (
              <NumericInput
                rounded
                totalWidth={70}
                minValue={1}
                maxValue={product.quantity}
                value={quantity}
                onChange={(value) => handleChange(value)}
              />
            ) : (
              <Text>{quantity}</Text>
            )}
          </HStack>
        </VStack>
      </HStack>
      <VStack style={{ flex: 2 }}>
        <Text>Total:</Text>
        <Text>{quantity * product.price}KD</Text>
      </VStack>
      {editMode ? (
        <HStack
          style={{
            flex: 2,
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          <Ionicons
            name="checkmark-sharp"
            size={24}
            color="green"
            onPress={handleEdit}
          />
          <FontAwesome5
            name="times"
            size={24}
            color="red"
            onPress={() => setEditMode(false)}
          />
        </HStack>
      ) : (
        <HStack
          style={{
            flex: 2,
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          <FontAwesome5
            name="edit"
            size={20}
            color="#06f"
            onPress={() => setEditMode(true)}
          />
          <Ionicons
            name="trash-bin-outline"
            size={24}
            color="#f60"
            onPress={() => handleDelete()}
          />
        </HStack>
      )}
    </HStack>
  );
};

export default observer(CartItem);

const styles = StyleSheet.create({
  container: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    // padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    backgroundColor: "#fff",
  },
  info: {
    alignItems: "center",
    flex: 5,
    padding: 10,
  },
  img: {
    width: 50,
    height: 50,
    marginRight: 5,
    borderRadius: 25,
  },
  name: {
    fontWeight: "bold",
    fontSize: 15,
  },
  price: {
    color: "#777",
    alignItems: "center",
  },
});
