import { makeAutoObservable } from "mobx";
import { instance } from "./instance";

class ShopStore {
  constructor() {
    makeAutoObservable(this);
  }
  shops = [];

  fetchShops = async () => {
    try {
      const response = await instance.get("/shops");
      this.shops = response.data;
    } catch (error) {
      console.log("ShopStore -> fetchShops -> error", error);
    }
  };
}

const shopStore = new ShopStore();
shopStore.fetchShops();

export default shopStore;
