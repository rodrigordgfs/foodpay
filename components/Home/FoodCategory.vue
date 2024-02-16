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
      <div
        v-for="offer in categories"
        :key="offer"
        class="shadow flex flex-col rounded-lg border-4 border-orange-500 bg-orange-500 cursor-pointer"
      >
        <img
          :src="offer.image"
          alt="offer.title"
          class="rounded-t-lg object-cover max-h-16 h-16"
        />
        <div class="flex-1 flex flex-row items-center justify-center">
          <h3 class="text-xs font-semibold p-2 text-center text-white">
            {{ offer.title }}
          </h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const categories = ref([
  {
    title: "Pizza",
    image:
      "https://img.freepik.com/fotos-gratis/uma-fatia-de-pizza-crocante-com-carne-e-queijo_140725-6974.jpg",
  },
  {
    title: "Hamburguer",
    image:
      "https://img.freepik.com/fotos-gratis/cheeseburguer-gourmet-com-carne-grelhada-tomate-cebola-e-pao-rustico-gerado-por-ia_188544-56059.jpg",
  },
  {
    title: "Sushi",
    image:
      "https://img.freepik.com/fotos-gratis/prato-de-sushi-fresco-nigiri-sashimi-e-maki-gerados-por-ia_188544-13381.jpg",
  },
  {
    title: "Frango Frito",
    image:
      "https://img.freepik.com/fotos-gratis/frango-frito-crocante-em-um-prato-com-salada-e-cenoura_1150-20212.jpg",
  },
]);
</script>

<style></style>
