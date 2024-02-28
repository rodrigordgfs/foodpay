<template>
  <div class="flex flex-col w-full h-screen items-center px-2 pt-20 gap-4">
    <div class="max-w-container w-full">
      <div
        class="grid grid-cols-3 gap-2"
        v-if="loadingProductsFavorites || loadingRestaurantsFavorites"
      >
        <LoaderSkeleton
          v-for="index in 12"
          :key="index"
          class="h-[130px] w-full"
        />
      </div>
      <div>
        <div v-if="productsFavorites.length > 0" class="mb-4">
          <p class="font-semibold text-lg dark:text-zinc-200">Comidas</p>
          <div class="grid grid-cols-3 md:grid-cols-6 gap-2">
            <CardFood
              v-for="item in productsFavorites"
              :key="item"
              :food="item"
            />
          </div>
        </div>
        <div v-if="restaurantsFavorites.length > 0">
          <p class="font-semibold text-lg dark:text-zinc-200">Restaurantes</p>
          <div class="grid grid-cols-3 md:grid-cols-6 gap-2">
            <CardRestaurant
              v-for="item in restaurantsFavorites"
              :key="item"
              :restaurant="item"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  name: "Favorite",
  layout: "authenticated",
});

const user = useSupabaseUser();
const runtimeConfig = useRuntimeConfig();

const productsFavorites = ref([]);
const restaurantsFavorites = ref([]);
const loadingProductsFavorites = ref(true);
const loadingRestaurantsFavorites = ref(true);

onMounted(() => {
  getProductsFavorites();
  getRestaurantsFavorites();
});

const getProductsFavorites = async () => {
  loadingProductsFavorites.value = true;
  const response = await $fetch(`/product/user/${user.value.id}`, {
    baseURL: runtimeConfig.public.apiUrl,
    method: "GET",
  });

  if (response) {
    productsFavorites.value = response.map((item) => item.product);
  }
  loadingProductsFavorites.value = false;
};

const getRestaurantsFavorites = async () => {
  loadingRestaurantsFavorites.value = true;
  const response = await $fetch(`/restaurant/user/${user.value.id}`, {
    baseURL: runtimeConfig.public.apiUrl,
    method: "GET",
  });

  if (response) {
    restaurantsFavorites.value = response.map((item) => item.restaurant);
  }
  loadingRestaurantsFavorites.value = false;
};
</script>

<style></style>
