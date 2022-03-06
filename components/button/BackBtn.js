import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { observer } from "mobx-react";
import { Ionicons } from "@expo/vector-icons";

const BackBtn = () => {
  const navigation = useNavigation();
  return (
    <Pressable onPress={() => navigation.goBack()}>
      <Ionicons name="arrow-back" size={22} style={styles.btn} />
    </Pressable>
  );
};

export default observer(BackBtn);

const styles = StyleSheet.create({
  btn: {
    color: "#fff",
  },
});
