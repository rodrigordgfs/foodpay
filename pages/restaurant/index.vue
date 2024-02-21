<template>
  <div class="grid grid-cols-3 gap-2 w-full h-calc(100%-30px) px-2 pt-20 mb-20">
    <LoaderSkeleton
      v-if="restaurant.restaurantLoading"
      v-for="index in 3"
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
</template>

<script setup>
definePageMeta({
  name: "Restaurants",
  layout: "authenticated",
});

const restaurant = useRestaurantStore();

const restaurants = ref([]);

onBeforeMount(() => {
  try {
    restaurant.getRestaurants();
  } catch (error) {
    console.log(error);
  }
});

onMounted(() => {
  watchEffect(() => {
    restaurants.value = restaurant.restaurants;
  });
});
</script>

<style></style>
