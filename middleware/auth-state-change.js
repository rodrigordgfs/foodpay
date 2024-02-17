export default defineNuxtRouteMiddleware(() => {
  const client = useSupabaseClient();
  const router = useRouter();

  client.auth.onAuthStateChange((event, session) => {
    if (event === "SIGNED_IN") {
      router.replace({
        name: "Home",
      });
    } else if (event === "SIGNED_OUT") {
      router.replace({
        name: "Login",
      });
    }
  });
});
