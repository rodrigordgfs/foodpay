<template>
  <div class="flex flex-col w-full h-calc(100%-30px) items-center px-2 pt-20">
    <div class="grid grid-cols-3 md:grid-cols-6 max-w-container w-full gap-2">
      <LoaderSkeleton
        v-if="loadingRestaurants"
        v-for="index in 30"
        :key="index"
        class="h-[144px] w-full"
      />
      <CardRestaurant
        v-else
        v-for="restaurant in restaurants"
        :key="restaurant"
        :restaurant="restaurant"
      />
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  name: "Restaurants",
  layout: "authenticated",
});

const runtimeConfig = useRuntimeConfig();

const restaurants = ref([]);
const loadingRestaurants = ref(true);

const getRestaurants = async () => {
  loadingRestaurants.value = true;
  const response = await $fetch("/restaurant", {
    baseURL: runtimeConfig.public.apiUrl,
    method: "GET",
  });

  if (response) {
    restaurants.value = response;
  }
  loadingRestaurants.value = false;
};

onMounted(() => {
  getRestaurants();
});
</script>

<style></style>
