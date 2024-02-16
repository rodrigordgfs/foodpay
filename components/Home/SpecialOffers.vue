<template>
  <div class="w-full flex flex-col mt-4 gap-1">
    <div class="flex flex-row items-center justify-between">
      <h2 class="text-lg font-bold">Ofertas especiais</h2>
      <button
        class="text-zinc-500 rounded-lg py-1 px-3 font-semibold hover:text-orange-500 transition-all"
      >
        Ver todos
      </button>
    </div>
    <div class="grid grid-cols-3 gap-2 w-full">
      <div
        v-for="offer in offers"
        :key="offer"
        class="shadow flex flex-col rounded-lg cursor-pointer"
      >
        <div class="relative flex flex-col">
          <img
            :src="offer.image"
            alt="offer.title"
            class="rounded-t-lg object-cover h-24"
          />
          <p
            class="rounded-tl-lg rounded-br-lg bg-orange-500 py-1 px-2 text-xs absolute text-white font-bold"
          >
            {{ offer.discount }}% OFF
          </p>
        </div>
        <h3 class="text-xs font-semibold text-center p-2">{{ offer.title }}</h3>
      </div>
    </div>
  </div>
</template>

<script setup>
const offers = ref([
  {
    title: "Combo de pizza",
    image: "https://via.placeholder.com/150",
    discount: 20,
  },
  {
    title: "Combo de pizza",
    image: "https://via.placeholder.com/150",
    discount: 20,
  },
  {
    title: "Combo de pizza",
    image: "https://via.placeholder.com/150",
    discount: 20,
  },
]);
</script>

<style></style>
