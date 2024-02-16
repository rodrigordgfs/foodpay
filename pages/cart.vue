<template>
  <div
    v-if="cart.length > 0"
    class="flex flex-col w-full h-screen px-2 mb-64 pt-20 gap-4"
  >
    <div class="grid grid-cols-1 gap-2">
      <div
        v-for="item in cart"
        :key="item"
        class="shadow flex flex-row gap-2 rounded-lg items-center p-2"
      >
        <div class="flex flex-col gap-2">
          <img :src="item.image" class="rounded-lg h-20 w-36 object-cover" />
          <p class="font-semibold">
            Preço:
            <span class="font-bold">{{ useFormatMoney(item.price) }}</span>
          </p>
        </div>
        <div class="flex-1 flex-col">
          <div class="flex flex-col">
            <div class="flex flex-row justify-between">
              <p class="font-bold text-xl">{{ item.title }}</p>
              <div
                class="w-10 h-10 rounded-lg flex items-center justify-center p-2 hover:bg-orange-500"
                @click="removeFromCart(item)"
              >
                <Icon
                  name="material-symbols:delete-sharp"
                  class="text-zinc-600 hover:text-white transition-all cursor-pointer"
                  size="24"
                />
              </div>
            </div>
            <div class="flex flex-row items-center gap-2 py-2">
              <Icon
                name="material-symbols:star"
                size="16"
                class="text-orange-500"
              />
              <p>{{ item.rate }}</p>
              <Icon
                name="material-symbols:alarm"
                class="text-zinc-600"
                size="16"
              />
              <p>{{ item.time }} min</p>
            </div>
          </div>
          <div class="flex flex-row justify-end">
            <div
              class="border border-zinc-400 rounded-lg px-4 py-2 flex flex-row gap-4"
            >
              <div
                class="group border border-orange-500 w-7 h-7 rounded-full flex items-center justify-center hover:bg-orange-500 transition-all"
                @click="decreseQuantity(item)"
              >
                <Icon
                  name="material-symbols:check-indeterminate-small-rounded"
                  size="20"
                  class="group-hover:text-white transition-all"
                />
              </div>
              <p class="font-semibold">{{ item.quantity }}</p>
              <div
                class="group border border-orange-500 w-7 h-7 rounded-full flex items-center justify-center hover:bg-orange-500 transition-all"
                @click="increaseQuantity(item)"
              >
                <Icon
                  name="material-symbols:add-rounded"
                  size="20"
                  class="group-hover:text-white transition-all"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="fixed bottom-1 right-0 left-0 px-2 w-full flex flex-col pb-20 pt-2 gap-2 bg-white"
    >
      <div class="flex flex-row items-center justify-between">
        <p class="text-lg font-semibold">
          Total <span class="text-base">({{ totalQuantityCart }} items)</span>
        </p>
        <p class="font-bold text-xl">{{ useFormatMoney(totalPriceCart) }}</p>
      </div>
      <button
        class="w-full text-white bg-orange-500 py-3 rounded-lg hover:bg-orange-600 transition-all uppercase font-semibold"
      >
        Realizar pedido
      </button>
    </div>
  </div>
  <div
    v-else
    class="flex flex-col w-full h-screen pt-20 items-center justify-center"
  >
    <Icon
      name="material-symbols:remove-shopping-cart"
      size="64"
      class="text-orange-500"
    />
    <p class="text-lg font-semibold">Seu carrinho está vazio</p>
  </div>
</template>

<script setup>
definePageMeta({
  name: "Cart",
  layout: "authenticated",
});

const cart = reactive([
  {
    id: 1,
    title: "Hot Supreme",
    image:
      "https://img.freepik.com/fotos-gratis/rolos-de-sushi-servidos-com-molho-e-gergelim_141793-1276.jpg",
    price: 25.58,
    rate: 4.5,
    time: 30,
    quantity: 1,
  },
  {
    id: 2,
    title: "Tábua Variada",
    image:
      "https://img.freepik.com/fotos-gratis/bandeja-de-aperitivo-gourmet-rustica-pao-queijo-prosciutto-uvas-geradas-por-ia_188544-13391.jpg",
    price: 25.58,
    rate: 4.5,
    time: 30,
    quantity: 1,
  },
  {
    id: 3,
    title: "Pizza Portuguesa",
    image:
      "https://img.freepik.com/fotos-gratis/close-up-em-uma-deliciosa-pizza_23-2150852081.jpg",
    price: 25.58,
    rate: 4.5,
    time: 30,
    quantity: 1,
  },
  {
    id: 4,
    title: "Hot Supreme",
    image:
      "https://img.freepik.com/fotos-gratis/rolos-de-sushi-servidos-com-molho-e-gergelim_141793-1276.jpg",
    price: 25.58,
    rate: 4.5,
    time: 30,
    quantity: 1,
  },
  {
    id: 5,
    title: "Tábua Variada",
    image:
      "https://img.freepik.com/fotos-gratis/bandeja-de-aperitivo-gourmet-rustica-pao-queijo-prosciutto-uvas-geradas-por-ia_188544-13391.jpg",
    price: 25.58,
    rate: 4.5,
    time: 30,
    quantity: 1,
  },
  {
    id: 6,
    title: "Pizza Portuguesa",
    image:
      "https://img.freepik.com/fotos-gratis/close-up-em-uma-deliciosa-pizza_23-2150852081.jpg",
    price: 25.58,
    rate: 4.5,
    time: 30,
    quantity: 1,
  },
]);

const totalPriceCart = computed(() => {
  return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
});

const totalQuantityCart = computed(() => {
  return cart.reduce((acc, item) => acc + item.quantity, 0);
});

const increaseQuantity = (item) => {
  const index = cart.findIndex((i) => i.id === item.id);
  cart[index].quantity++;
};

const decreseQuantity = (item) => {
  const index = cart.findIndex((i) => i.id === item.id);
  if (cart[index].quantity > 1) {
    cart[index].quantity--;
  }
};

const removeFromCart = (item) => {
  const index = cart.findIndex((i) => i.id === item.id);
  cart.splice(index, 1);
};
</script>

<style></style>
