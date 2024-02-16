export default defineNuxtRouteMiddleware(() => {
  const client = useSupabaseClient();
  const router = useRouter();

  client.auth.onAuthStateChange((event, session) => {
    if (event === "SIGNED_IN") {
      router.push({
        name: "Home",
      });
    } else if (event === "SIGNED_OUT") {
      router.push({
        name: "Login",
      });
    }
  });
});
