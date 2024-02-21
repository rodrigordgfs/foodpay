<template>
  <div class="w-full flex flex-col mt-4 gap-1">
    <div class="flex flex-row items-center justify-between">
      <h2 class="text-lg font-bold">Comidas Populares</h2>
      <button
        class="text-zinc-500 rounded-lg py-1 px-3 font-semibold text-sm hover:text-orange-500 transition-all"
      >
        Ver todos
      </button>
    </div>
    <div class="grid grid-cols-3 gap-2 w-full">
      <LoaderSkeleton
        v-if="loadingFoods"
        v-for="index in 3"
        :key="index"
        class="h-[130px] w-full"
      />
      <div
        v-else
        v-for="food in foods"
        :key="food"
        class="shadow flex flex-col rounded-lg cursor-pointer"
      >
        <div class="relative flex flex-col">
          <img
            :src="runtimeConfig.public.bucketUrl + '/' + food.image"
            alt="offer.title"
            class="rounded-t-lg object-cover h-24"
          />
        </div>
        <div class="flex flex-col p-2 gap-1">
          <h3 class="text-xs font-semibold text-center">{{ food.name }}</h3>
          <div
            class="flex flex-row items-center justify-between text-xs font-semibold"
          >
            <p>
              {{ useFormatMoney(food.price) }}
            </p>
            <div class="flex flex-row items-center">
              <Icon
                name="material-symbols:alarm"
                class="text-zinc-600"
                size="14"
              />
              <p>{{ food.time }} min</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const runtimeConfig = useRuntimeConfig();

const foods = ref([]);
const loadingFoods = ref(true);

const getProducts = async () => {
  loadingFoods.value = true;
  const response = await $fetch("/product", {
    baseURL: runtimeConfig.public.apiUrl,
    method: "GET",
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
