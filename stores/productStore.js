import { makeAutoObservable } from "mobx";
import { instance } from "./instance";

class ProductStore {
  constructor() {
    makeAutoObservable(this);
  }
  products = [];

  fetchProducts = async () => {
    try {
      const response = await instance.get("/products");
      this.products = response.data;
    } catch (error) {
      console.log("ProductStore -> fetchProducts -> error", error);
    }
  };
}

const productStore = new ProductStore();
productStore.fetchProducts();

export default productStore;
