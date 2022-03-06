import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import shopStore from "../stores/shopStore";
import ShopItem from "./ShopItem";
import { observer } from "mobx-react";
import Header from "./Header";

const ShopList = ({ navigation }) => {
  const shopList = shopStore.shops.map((shop) => (
    <ShopItem key={shop._id} shop={shop} navigation={navigation} />
  ));
  return (
    <View style={styles.container}>
      <Header title="Shops" />
      <ScrollView>
        <View style={styles.scroll}>{shopList}</View>
      </ScrollView>
    </View>
  );
};

export default observer(ShopList);

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    flex: 1,
  },
  scroll: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
