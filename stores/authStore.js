import { makeAutoObservable } from "mobx";
import decode from "jwt-decode";
import { instance } from "./instance";
import AsyncStorage from "@react-native-async-storage/async-storage";

class AuthStore {
  constructor() {
    makeAutoObservable(this);
    // this will turn our class into a mobx store and all components can observe the changes that happen in the store
  }
  user = null;

  signup = async (userData, navigation) => {
    try {
      const response = await instance.post("/signup", userData);
      const { token } = response.data;
      this.setUser(token);
      navigation.replace("Home");
    } catch (error) {
      console.log(error);
    }
  };

  signin = async (userData, navigation) => {
    try {
      const response = await instance.post("/signin", userData);
      const { token } = response.data;
      this.setUser(token);
      navigation.replace("Home");
    } catch (error) {
      console.log(error);
    }
  };

  signout = async () => {
    try {
      instance.defaults.headers.common.Authorization = null;
      this.user = null;
      // localStorage.removeItem("token");
      AsyncStorage.removeItem("token");
    } catch (error) {
      console.log(error);
    }
  };

  setUser = async (token) => {
    try {
      const decodedToken = decode(token);
      this.user = decodedToken;
      instance.defaults.headers.common.Authorization = `Bearer ${token}`;
      // localStorage.setItem("token", token);
      await AsyncStorage.setItem("token", token);
    } catch (error) {
      console.log(error);
    }
  };

  checkForToken = async () => {
    try {
      const token = await AsyncStorage.getItem("token");
      if (token) {
        const decodedToken = decode(token);
        if (Date.now() < decodedToken.exp) {
          this.setUser(token);
        } else {
          this.signout();
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
}

const authStore = new AuthStore();
authStore.checkForToken();
export default authStore;
