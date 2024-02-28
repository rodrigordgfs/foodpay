<template>
  <div class="flex flex-col items-center">
    <div class="max-w-container w-full">
      <div
        v-if="cartStore.cartTotalItems > 0"
        class="flex flex-col w-full h-screen px-2 mb-20 pt-20 gap-4"
      >
        <div class="grid grid-cols-1 gap-2">
          <CardCart v-for="item in cartStore.cart" :key="item" :cart="item" />
        </div>
        <div
          class="fixed bottom-1 right-0 left-0 px-2 w-full flex flex-col pb-20 pt-2 gap-2 bg-white dark:bg-zinc-800"
        >
          <div class="flex flex-row items-center justify-between">
            <p class="text-lg font-semibold dark:text-zinc-200">
              Total
              <span class="text-base"
                >({{ cartStore.cartTotalItems }} items)</span
              >
            </p>
            <p class="font-bold text-xl dark:text-zinc-200">
              {{ useFormatMoney(cartStore.cartTotal) }}
            </p>
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
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  name: "Cart",
  layout: "authenticated",
});

const cartStore = useCartStore();
</script>

<style></style>
