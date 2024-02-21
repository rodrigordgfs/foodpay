<template>
  <div class="w-full flex flex-col mt-4 gap-1">
    <div class="flex flex-row items-center justify-between">
      <h2 class="text-lg font-bold">Restaurantes</h2>
      <button
        class="text-zinc-500 rounded-lg py-1 px-3 font-semibold text-sm hover:text-orange-500 transition-all"
        @click="handleGoToAllRestaurants"
      >
        Ver todos
      </button>
    </div>
    <div class="grid grid-cols-3 gap-2 w-full mb-20">
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
  </div>
</template>

<script setup>
const router = useRouter();
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

const handleGoToAllRestaurants = () => {
  router.push({
    name: "Restaurants",
  });
};
</script>

<style></style>
