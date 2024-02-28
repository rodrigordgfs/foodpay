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
    <div class="grid grid-cols-3 md:grid-cols-6 gap-2 w-full mb-20">
      <LoaderSkeleton
        v-if="loadingRestaurant"
        v-for="index in 9"
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
const runtimeConfig = useRuntimeConfig();

const restaurants = ref([]);
const loadingRestaurant = ref(true);

const getRestaurant = async () => {
  loadingRestaurant.value = true;
  const response = await $fetch("/restaurant", {
    baseURL: runtimeConfig.public.apiUrl,
    method: "GET",
    params: {
      limit: 9,
    },
  });

  if (response) {
    restaurants.value = response;
  }
  loadingRestaurant.value = false;
};

onMounted(() => {
  getRestaurant();
});

const handleGoToAllRestaurants = () => {
  router.push({
    name: "Restaurants",
  });
};
</script>

<style></style>
