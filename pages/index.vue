<template>
  <div
    class="w-full h-screen bg-orange-500 flex flex-col items-center justify-center px-10 gap-4"
  >
    <p class="font-montserrat font-bold text-white text-7xl">FoodPay</p>
    <Icon name="line-md:loading-loop" color="#FFF" size="30" />
  </div>
</template>

<script setup>
definePageMeta({
  name: "Splashscreen",
});

const user = useSupabaseUser();
const router = useRouter();

onMounted(() => {
  setTimeout(() => {
    if (user.value) {
      router.push({ name: "Home" });
    } else {
      router.push({ name: "Login" });
    }
  }, 3000);
});
</script>

<style></style>
