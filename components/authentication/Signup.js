import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Button, HStack, VStack } from "native-base";
import { TextInput } from "react-native-gesture-handler";
import authStore from "../../stores/authStore";

const Signup = ({ navigation }) => {
  const [user, setUser] = useState({
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: "",
  });

  if (authStore.user) navigation.navigate("Home");
  const handleSubmit = async () => {
    await authStore.signup(user, navigation);
  };

  if (authStore.user) navigation.navigate("Home");
  return (
    <VStack style={styles.container}>
      <Text>Sign up</Text>
      <VStack style={{ width: "100%", padding: 15 }}>
        <TextInput
          style={{
            height: 40,
            borderColor: "#aaa",
            borderWidth: 1,
            borderRadius: 20,
            paddingHorizontal: 12,
          }}
          placeholder="First Name"
          value={user.firstName}
          onChangeText={(firstName) => setUser({ ...user, firstName })}
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
          placeholder="Last Name"
          value={user.lastName}
          onChangeText={(lastName) => setUser({ ...user, lastName })}
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
          placeholder="Email"
          value={user.email}
          onChangeText={(email) => setUser({ ...user, email })}
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
          placeholder="Username"
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
          secureTextEntry
          placeholder="Password"
          value={user.password}
          onChangeText={(password) => setUser({ ...user, password })}
        />
      </VStack>
      <Button mb={3} colorScheme="blue" onPress={handleSubmit}>
        signup
      </Button>
      <HStack>
        <Text>Have an account ?</Text>
        <Pressable onPress={() => navigation.navigate("Signin")}>
          <Text> Signin</Text>
        </Pressable>
      </HStack>
    </VStack>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
});
