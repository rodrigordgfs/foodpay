<template>
  <div
    class="w-full h-screen bg-orange-500 flex flex-col items-center justify-center px-10 gap-4"
  >
    <img src="/logo-white.png" />
    <Icon name="line-md:loading-loop" color="#FFF" size="30" />
  </div>
</template>

<script setup>
onMounted(() => {
  setTimeout(() => {
    console.log("Mounted");
  }, 3000);
});
</script>

<style></style>
