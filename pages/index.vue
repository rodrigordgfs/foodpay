<template>
  <div
    class="w-full h-screen bg-orange-500 flex flex-col items-center justify-center px-10 gap-4"
  >
    <img src="/logo-white.png" class="max-w-[300px] w-full" />
    <Icon name="line-md:loading-loop" color="#FFF" size="30" />
  </div>
</template>

<script setup>
definePageMeta({
  name: "Splashscreen",
});

const router = useRouter();

onMounted(() => {
  setTimeout(() => {
    router.push({ name: "Login" });
  }, 3000);
});
</script>

<style></style>
