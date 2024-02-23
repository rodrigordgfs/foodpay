<template>
  <div class="grid grid-cols-3 gap-2 w-full h-calc(100%-30px) px-2 pt-20 mb-20">
    <LoaderSkeleton
      v-if="loadingFoods"
      v-for="index in 30"
      :key="index"
      class="h-[144px] w-full"
    />
    <CardFood v-else v-for="food in foods" :key="food" :food="food" />
  </div>
</template>

<script setup>
definePageMeta({
  name: "Products",
  layout: "authenticated",
});

const runtimeConfig = useRuntimeConfig();

const foods = ref([]);
const loadingFoods = ref(true);

const getProducts = async () => {
  loadingFoods.value = true;
  const response = await $fetch("/product", {
    baseURL: runtimeConfig.public.apiUrl,
    method: "GET",
    params: {
      highlight: true,
    },
  });

  if (response) {
    foods.value = response;
  }
  loadingFoods.value = false;
};

onMounted(() => {
  getProducts();
});
</script>

<style></style>
