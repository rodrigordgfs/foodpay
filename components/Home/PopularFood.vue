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
      <div
        v-for="food in foods"
        :key="food"
        class="shadow flex flex-col rounded-lg cursor-pointer"
      >
        <div class="relative flex flex-col">
          <img
            :src="food.image"
            alt="offer.title"
            class="rounded-t-lg object-cover h-24"
          />
        </div>
        <div class="flex flex-col p-2 gap-1">
          <h3 class="text-xs font-semibold text-center">{{ food.title }}</h3>
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
const foods = ref([
  {
    title: "Hot Supreme",
    image:
      "https://img.freepik.com/fotos-gratis/rolos-de-sushi-servidos-com-molho-e-gergelim_141793-1276.jpg",
    price: 34.5,
    rate: 4,
    time: 20,
  },
  {
    title: "Tábua Variada",
    image:
      "https://img.freepik.com/fotos-gratis/bandeja-de-aperitivo-gourmet-rustica-pao-queijo-prosciutto-uvas-geradas-por-ia_188544-13391.jpg",
    price: 75.0,
    rate: 5,
    time: 40,
  },
  {
    title: "Pizza Portuguesa",
    image:
      "https://img.freepik.com/fotos-gratis/close-up-em-uma-deliciosa-pizza_23-2150852081.jpg",
    price: 59.99,
    rate: 4.5,
    time: 30,
  },
]);
</script>

<style></style>
