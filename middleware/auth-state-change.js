export default defineNuxtRouteMiddleware((to, from) => {
  const client = useSupabaseClient();
  const userStore = useUserStore();
  const router = useRouter();

  client.auth.onAuthStateChange((event, session) => {
    if (event === "SIGNED_IN") {
      userStore.user = session.user;
      router.push({
        name: "Home",
      });
    } else if (event === "SIGNED_OUT") {
      userStore.user = null;
      router.push({
        name: "Login",
      });
    }
  });
});
