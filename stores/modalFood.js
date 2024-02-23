import { defineStore } from "pinia";

export const useModalFoodStore = defineStore("modalFood", {
  id: "useModalFoodStore",
  state: () => ({
    showModal: false,
    food: null,
  }),
  actions: {
    toggleModal() {
      this.showModal = !this.showModal;
    },

    setFood(food) {
      this.food = food;
    },
  },
});
