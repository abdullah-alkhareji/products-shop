import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { Button, HStack, VStack } from "native-base";
import authStore from "../../stores/authStore";
import { Pressable } from "react-native";

const Signin = ({ navigation }) => {
  const [user, setUser] = useState({ username: "", password: "" });
  const handleSubmit = async () => {
    await authStore.signin(user, navigation);
  };
  if (authStore.user) navigation.navigate("Home");
  return (
    <VStack style={styles.container}>
      <Text>Signin</Text>
      <VStack style={{ width: "100%", padding: 15 }}>
        <TextInput
          style={{
            height: 40,
            borderColor: "#aaa",
            borderWidth: 1,
            borderRadius: 20,
            paddingHorizontal: 12,
          }}
          placeholder="username"
          value={user.username}
          onChangeText={(username) => setUser({ ...user, username })}
        />
      </VStack>
      <VStack style={{ width: "100%", padding: 15 }}>
        <TextInput
          style={{
            height: 40,
            borderColor: "#aaa",
            borderWidth: 1,
            borderRadius: 20,
            paddingHorizontal: 12,
          }}
          placeholder="password"
          secureTextEntry
          value={user.password}
          onChangeText={(password) => setUser({ ...user, password })}
        />
      </VStack>
      <Button colorScheme="blue" onPress={handleSubmit}>
        signin
      </Button>
      <HStack>
        <Text> Not a user ?</Text>
        <Pressable onPress={() => navigation.navigate("Signup")}>
          <Text> Signup</Text>
        </Pressable>
      </HStack>
    </VStack>
  );
};

export default Signin;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
});
