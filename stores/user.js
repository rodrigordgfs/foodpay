import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  id: "useUserStore",
  persist: true,
  state: () => ({
    user: null,
  }),
  actions: {
    async signIn(email, password) {
      const client = useSupabaseClient();

      const { data, error } = await client.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        alert(error.message);
        return;
      }

      this.user = data;
    },
  },
});
