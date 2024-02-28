<template>
  <div
    class="fixed w-full bg-orange-500 shadow-md flex flex-row items-center justify-between px-2 z-50"
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
    <div class="flex flex-col py-2 items-center">
      <p class="font-montserrat font-bold text-white text-2xl">FoodPay</p>
      <p class="font-montserrat font-bold text-white text-sm">
        {{ route.name }}
      </p>
    </div>
    <div
      class="group w-10 h-10 flex items-center justify-center rounded-full transition-all"
      @click="useDarkMode.toggleDarkMode()"
    >
      <Icon
        v-if="!useDarkMode.isDarkModeEnabled"
        name="material-symbols:light-mode"
        size="24"
        class="text-white transition-all"
      />
      <Icon
        v-if="useDarkMode.isDarkModeEnabled"
        name="material-symbols:dark-mode"
        size="24"
        class="text-white transition-all"
      />
    </div>
  </div>
</template>

<script setup>
const route = useRoute();
const router = useRouter();
const useDarkMode = useDarkModeStore();

const back = () => {
  if (route.name === "Home") {
    return;
  }
  router.back();
};
</script>

<style></style>
