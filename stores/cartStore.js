import { makeAutoObservable } from "mobx";
import AsyncStorage from "@react-native-async-storage/async-storage";

class CartStore {
  constructor() {
    makeAutoObservable(this);
  }
  items = [
    // {
    //   product: {
    //     _id: "6182a8b31bd7fa38942fdf23",
    //     name: "Cookie",
    //     price: 5,
    //     image:
    //       "https://www.cookingclassy.com/wp-content/uploads/2014/06/chocolate-chip-cookie-16.jpg",
    //   },
    //   quantity: 5,
    // },
    // {
    //   product: {
    //     _id: "6182a8b31bd7fa46652fdf88",
    //     name: "Another cookie",
    //     price: 15,
    //     image:
    //       "https://www.cookingclassy.com/wp-content/uploads/2014/06/chocolate-chip-cookie-16.jpg",
    //   },
    //   quantity: 3,
    // },
  ];

  get totalQuantity() {
    return this.items.map((item) => item.quantity).reduce((a, b) => a + b, 0);
  }

  addItemToCart = async (product, qnt) => {
    try {
      let item = this.items.find((item) => item.product._id === product._id);
      if (item) {
        item.quantity = item.quantity + qnt;
      } else {
        const newItem = { product, quantity: qnt };
        this.items.push(newItem);
      }
      const jsonItems = JSON.stringify(this.items);
      await AsyncStorage.setItem("Cart", jsonItems);
    } catch (error) {
      console.log(error);
    }
  };

  fetchCart = async () => {
    try {
      const jsonItems = await AsyncStorage.getItem("Cart");
      this.items = jsonItems ? JSON.parse(jsonItems) : [];
    } catch (error) {
      console.log(error);
    }
  };

  editCart = async (product, qnt) => {
    try {
      const foundProduct = this.items.find(
        (item) => (item.product._id = product._id)
      );
      if (foundProduct) {
        foundProduct.quantity = qnt;
      }
      const jsonItems = JSON.stringify(this.items);
      await AsyncStorage.setItem("Cart", jsonItems);
    } catch (error) {
      console.log(error);
    }
  };

  removeItemFromCart = async (product) => {
    try {
      const foundProduct = this.items.find(
        (item) => item.product._id === product._id
      );
      if (foundProduct) {
        this.items = this.items.filter(
          (item) => item.product._id !== foundProduct.product._id
        );
      }
      const jsonItems = JSON.stringify(this.items);
      await AsyncStorage.setItem("Cart", jsonItems);
    } catch (error) {
      console.log(error);
    }
  };

  chechout = async () => {
    try {
      this.items = [];
      const jsonItems = JSON.stringify(this.items);
      await AsyncStorage.setItem("Cart", jsonItems);
    } catch (error) {
      console.log(error);
    }
  };
}

const cartStore = new CartStore();
cartStore.fetchCart();
export default cartStore;
