import { defineStore } from "pinia";

export const useDarkModeStore = defineStore("darkMode", {
  id: "myDarkModeStore",
  persist: true,
  state: () => ({
    darkModeEnabled: false,
  }),
  getters: {
    isDarkModeEnabled: (state) => state.darkModeEnabled,
  },
  actions: {
    toggleDarkMode() {
      this.darkModeEnabled = !this.darkModeEnabled;
      document.documentElement.classList.toggle("dark", this.darkModeEnabled);
    },
  },
});
