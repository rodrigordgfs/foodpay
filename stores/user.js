import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  id: "useUserStore",
  persist: true,
  state: () => ({}),
  actions: {
    async login(email, password) {
      const client = useSupabaseClient();

      const { error } = await client.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        alert(error.message);
        return;
      }
    },

    async register(name, email, password) {
      const client = useSupabaseClient();
      const router = useRouter();

      const { data, error } = await client.auth.signUp({
        email,
        password,
        options: {
          data: {
            name,
          },
        },
      });

      if (error) {
        alert(error.message);
        return;
      }

      router.push({
        name: "Home",
      });
    },
  },
});
