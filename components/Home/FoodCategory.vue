<template>
  <div class="w-full flex flex-col mt-4 gap-1">
    <div class="flex flex-row items-center justify-between">
      <h2 class="text-lg font-bold">Categorias</h2>
      <button
        class="text-zinc-500 rounded-lg py-1 px-3 font-semibold text-sm hover:text-orange-500 transition-all"
      >
        Ver todos
      </button>
    </div>
    <div class="grid grid-cols-4 gap-2 w-full">
      <LoaderSkeleton
        v-if="loadingCategories"
        v-for="index in 4"
        :key="index"
        class="h-[105px] w-full"
      />
      <div
        v-else
        v-for="categorie in categories"
        :key="categorie"
        class="shadow flex flex-col rounded-lg border-4 border-orange-500 bg-orange-500 cursor-pointer"
      >
        <img
          :src="runtimeConfig.public.bucketUrl + '/' + categorie.image"
          class="rounded-t-lg object-cover max-h-16 h-16"
        />
        <div class="flex-1 flex flex-row items-center justify-center">
          <h3 class="text-xs font-semibold p-2 text-center text-white">
            {{ categorie.name }}
          </h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const runtimeConfig = useRuntimeConfig();

const categories = ref([]);
const loadingCategories = ref(true);

const getCategories = async () => {
  loadingCategories.value = true;
  const response = await $fetch("/categorie", {
    baseURL: runtimeConfig.public.apiUrl,
    method: "GET",
  });

  if (response) {
    categories.value = response;
  }
  loadingCategories.value = false;
};

onMounted(() => {
  getCategories();
});
</script>

<style></style>
