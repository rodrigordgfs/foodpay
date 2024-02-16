<template>
  <div class="w-full flex flex-col mt-4 gap-1">
    <div class="flex flex-row items-center justify-between">
      <h2 class="text-lg font-bold">Ofertas especiais</h2>
      <button
        class="text-zinc-500 rounded-lg py-1 px-3 font-semibold text-sm hover:text-orange-500 transition-all"
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
    title: "Xis Tudo",
    image:
      "https://img.freepik.com/fotos-gratis/hamburguer-de-vista-frontal-em-um-carrinho_141793-15542.jpg",
    discount: 20,
  },
  {
    title: "Batata Frita",
    image:
      "https://img.freepik.com/fotos-gratis/batatas-fritas-crocantes-com-ketchup-e-maionese_1150-26588.jpg",
    discount: 20,
  },
  {
    title: "Combo Total",
    image:
      "https://img.freepik.com/fotos-gratis/alto-angulo-de-fast-food-na-mesa-branca_23-2148273120.jpg",
    discount: 20,
  },
]);
</script>

<style></style>
