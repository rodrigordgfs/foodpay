import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {
  id: "useCartStore",
  persist: true,
  state: () => ({
    cart: [],
  }),
  actions: {
    addToCart(food) {
      this.cart.push(food);
    },
    removeFromCart(index) {
      this.cart.splice(index, 1);
    },
    decreaseQuantity(item) {
      const index = this.cart.indexOf(item);
      if (item.quantity > 1) {
        this.cart[index].quantity--;
      } else {
        this.cart.splice(index, 1);
      }
    },
    increaseQuantity(item) {
      const index = this.cart.indexOf(item);
      this.cart[index].quantity++;
    },
  },
  getters: {
    cartTotal() {
      return this.cart.reduce(
        (acc, food) => acc + food.price * food.quantity,
        0
      );
    },
    cartTotalItems() {
      return this.cart.reduce((acc, food) => acc + food.quantity, 0);
    },
  },
});
