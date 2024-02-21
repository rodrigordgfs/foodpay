import { defineStore } from "pinia";

export const useRestaurantStore = defineStore("restaurant", {
  id: "useRestaurantStore",
  state: () => ({
    restaurants: [],
    restaurantLoading: true,
  }),
  actions: {
    async getRestaurants() {
      const runtimeConfig = useRuntimeConfig();
      this.restaurantLoading = true;
      const response = await useFetch("/restaurant", {
        baseURL: runtimeConfig.public.apiUrl,
        method: "GET",
      });
      this.restaurants = response.data;
      this.restaurantLoading = false;
    },
  },
  getters: {},
});
