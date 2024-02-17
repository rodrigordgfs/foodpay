<template>
  <div
    class="fixed w-full bg-orange-500 shadow flex flex-row items-center justify-between px-2 z-50"
  >
    <div
      class="group w-10 h-10 flex items-center justify-center rounded-full hover:bg-orange-500 transition-all"
      @click="back"
    >
      <Icon
        v-if="route.name !== 'Home'"
        name="material-symbols:arrow-back-ios-new"
        size="24"
        class="text-white group-hover:text-orange-600 transition-all"
      />
    </div>
    <p class="font-montserrat py-4 font-bold text-white text-2xl">FoodPay</p>
    <div
      class="group w-10 h-10 flex items-center justify-center rounded-full hover:bg-orange-500 transition-all"
    >
      <Icon
        name="material-symbols:notifications"
        size="24"
        class="text-white group-hover:text-orange-600 transition-all"
      />
    </div>
  </div>
</template>

<script setup>
const route = useRoute();
const router = useRouter();

const back = () => {
  if (route.name === "Home") {
    return;
  }
  router.back();
};
</script>

<style></style>
