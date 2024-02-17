<template>
  <div class="flex flex-col w-full h-screen px-2 pb-50 pt-20 gap-4">
    <div class="grid grid-cols-1 gap-2">
      <div
        v-for="favorite in favorites"
        :key="favorite"
        class="shadow flex flex-row gap-2 rounded-lg items-center p-2"
      >
        <img
          :src="favorite.image"
          class="h-24 w-40 object-cover rounded-tl-lg rounded-bl-lg"
        />
        <div class="flex-1 flex flex-col">
          <p class="font-bold text-lg">{{ favorite.title }}</p>
          <div class="flex flex-row items-center gap-1">
            <Icon
              name="material-symbols:alarm"
              class="text-zinc-600"
              size="16"
            />
            <p>{{ favorite.time }} min</p>
          </div>
          <p class="font-semibold">{{ useFormatMoney(favorite.price) }}</p>
          <div class="flex flex-row">
            <Icon
              name="material-symbols:star"
              size="16"
              class="text-orange-500"
            />
            <Icon
              name="material-symbols:star"
              size="16"
              class="text-orange-500"
            />
            <Icon
              name="material-symbols:star"
              size="16"
              class="text-orange-500"
            />
            <Icon
              name="material-symbols:star"
              size="16"
              class="text-orange-500"
            />
            <Icon
              name="material-symbols:star"
              size="16"
              class="text-orange-500"
            />
          </div>
        </div>
        <div class="flex flex-col items-center justify-between">
          <div
            class="w-10 h-10 rounded-lg flex items-center justify-center p-2 hover:bg-orange-500"
          >
            <Icon
              name="material-symbols:delete-sharp"
              class="text-zinc-600 hover:text-white transition-all cursor-pointer"
              size="24"
            />
          </div>
          <div
            class="w-10 h-10 rounded-lg flex items-center justify-center p-2 hover:bg-orange-500"
          >
            <Icon
              name="material-symbols:shopping-cart-outline"
              class="text-zinc-600 hover:text-white transition-all cursor-pointer"
              size="24"
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

const favorites = reactive([
  {
    id: 1,
    title: "Hot Supreme",
    image:
      "https://img.freepik.com/fotos-gratis/rolos-de-sushi-servidos-com-molho-e-gergelim_141793-1276.jpg",
    price: 25.58,
    rate: 4.5,
    time: 30,
  },
  {
    id: 2,
    title: "Tábua Variada",
    image:
      "https://img.freepik.com/fotos-gratis/bandeja-de-aperitivo-gourmet-rustica-pao-queijo-prosciutto-uvas-geradas-por-ia_188544-13391.jpg",
    price: 25.58,
    rate: 4.5,
    time: 30,
  },
  {
    id: 3,
    title: "Pizza Portuguesa",
    image:
      "https://img.freepik.com/fotos-gratis/close-up-em-uma-deliciosa-pizza_23-2150852081.jpg",
    price: 25.58,
    rate: 4.5,
    time: 30,
  },
  {
    id: 4,
    title: "Hot Supreme",
    image:
      "https://img.freepik.com/fotos-gratis/rolos-de-sushi-servidos-com-molho-e-gergelim_141793-1276.jpg",
    price: 25.58,
    rate: 4.5,
    time: 30,
  },
  {
    id: 5,
    title: "Tábua Variada",
    image:
      "https://img.freepik.com/fotos-gratis/bandeja-de-aperitivo-gourmet-rustica-pao-queijo-prosciutto-uvas-geradas-por-ia_188544-13391.jpg",
    price: 25.58,
    rate: 4.5,
    time: 30,
  },
  {
    id: 6,
    title: "Pizza Portuguesa",
    image:
      "https://img.freepik.com/fotos-gratis/close-up-em-uma-deliciosa-pizza_23-2150852081.jpg",
    price: 25.58,
    rate: 4.5,
    time: 30,
  },
]);
</script>

<style></style>
