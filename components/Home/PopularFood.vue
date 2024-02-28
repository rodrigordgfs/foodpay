<template>
  <div class="w-full flex flex-col mt-4 gap-1">
    <div class="flex flex-row items-center justify-between">
      <h2 class="text-lg font-bold dark:text-zinc-200">Comidas Populares</h2>
      <button
        class="text-zinc-500 dark:text-zinc-200 rounded-lg py-1 px-3 font-semibold text-sm hover:text-orange-500 transition-all"
        @click="handleGoToProducts"
      >
        Ver todos
      </button>
    </div>
    <div class="grid grid-cols-3 md:grid-cols-6 items-center gap-2 w-full">
      <LoaderSkeleton
        v-if="loadingFoods"
        v-for="index in 6"
        :key="index"
        class="h-[130px] w-full"
      />
      <CardFood v-else v-for="food in foods" :key="food" :food="food" />
    </div>
  </div>
</template>

<script setup>
const runtimeConfig = useRuntimeConfig();
const router = useRouter();

const foods = ref([]);
const loadingFoods = ref(true);

const getProducts = async () => {
  loadingFoods.value = true;
  const response = await $fetch("/product", {
    baseURL: runtimeConfig.public.apiUrl,
    method: "GET",
    params: {
      highlight: true,
      limit: 6,
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

const handleGoToProducts = () => {
  router.push({
    name: "Products",
  });
};
</script>

<style></style>
