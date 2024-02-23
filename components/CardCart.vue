<template>
  <div class="shadow flex flex-row gap-2 rounded-lg items-center p-2">
    <div class="flex flex-col gap-2">
      <img
        :src="runtimeConfig.public.bucketUrl + '/' + cart.image"
        class="rounded-lg h-20 w-36 object-cover"
      />
      <p class="font-semibold">
        Preço:
        <span class="font-bold">{{ useFormatMoney(cart.price) }}</span>
      </p>
    </div>
    <div class="flex-1 flex-col">
      <div class="flex flex-col">
        <div class="flex flex-row justify-between">
          <p class="font-bold text-xl">{{ cart.name }}</p>
          <div
            class="w-10 h-10 rounded-lg flex items-center justify-center p-2 hover:bg-orange-500"
            @click="cartStore.removeFromCart(item)"
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
          <p>{{ cart.rate }}</p>
          <Icon name="material-symbols:alarm" class="text-zinc-600" size="16" />
          <p>{{ cart.time }} min</p>
        </div>
      </div>
      <div class="flex flex-row justify-end">
        <div
          class="border border-zinc-400 rounded-lg px-4 py-2 flex flex-row gap-4"
        >
          <div
            class="group border border-orange-500 w-7 h-7 rounded-full flex items-center justify-center hover:bg-orange-500 transition-all"
            @click="cartStore.decreaseQuantity(cart)"
          >
            <Icon
              name="material-symbols:check-indeterminate-small-rounded"
              size="20"
              class="group-hover:text-white transition-all"
            />
          </div>
          <p class="font-semibold">{{ cart.quantity }}</p>
          <div
            class="group border border-orange-500 w-7 h-7 rounded-full flex items-center justify-center hover:bg-orange-500 transition-all"
            @click="cartStore.increaseQuantity(cart)"
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
</template>

<script setup>
const props = defineProps({
  cart: Object,
});

const cartStore = useCartStore();
const runtimeConfig = useRuntimeConfig();
</script>

<style></style>
