<template>
  <div
    v-if="modalFood.showModal"
    class="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center"
  >
    <OnClickOutside @trigger="modalFood.toggleModal">
      <div
        class="bg-white dark:bg-zinc-800 max-w-xl shadow-md p-2 m-5 rounded-2xl"
      >
        <div class="flex flex-col">
          <div class="flex flex-row relative rounded-lg">
            <img
              :src="runtimeConfig.public.bucketUrl + '/' + modalFood.food.image"
              class="rounded-tl-lg rounded-tr-lg w-full h-40 shadow-md object-cover"
            />
            <div
              class="group absolute top-2 left-2 bg-white dark:bg-zinc-800 rounded-lg p-2 h-10 2-10 flex items-center justify-center shadow-md hover:bg-orange-500 transition-all cursor-pointer"
              @click="toggleFavorite"
            >
              <Icon
                v-if="favoriting"
                name="line-md:loading-loop"
                size="24"
                class="text-orange-500 group-hover:text-white transition-all cursor-not-allowed"
              />
              <Icon
                v-else-if="!isFavorite"
                name="material-symbols:favorite-outline"
                size="24"
                class="text-orange-500 group-hover:text-white transition-all"
              />
              <Icon
                v-else
                name="material-symbols:favorite"
                size="24"
                class="text-orange-500 group-hover:text-white transition-all"
              />
            </div>
            <div
              class="group absolute bg-white dark:bg-zinc-800 top-2 right-2 rounded-lg p-2 h-10 2-10 flex items-center justify-center shadow-md transition-all cursor-pointer hover:bg-orange-500"
              @click="modalFood.toggleModal"
            >
              <Icon
                name="ic:outline-close"
                size="24"
                class="text-orange-500 transition-all group-hover:text-white"
              />
            </div>
          </div>
          <h2 class="font-bold text-2xl text-center my-2 dark:text-zinc-200">
            {{ modalFood.food.name }}
          </h2>
          <div class="flex flex-row items-center justify-center gap-2">
            <div class="flex flex-row items-center gap-1">
              <Icon
                name="material-symbols:star"
                size="16"
                class="text-orange-500"
              />
              <p class="text-sm font-medium dark:text-zinc-200">4.5</p>
            </div>
            <div class="flex flex-row items-center gap-1">
              <Icon
                name="material-symbols:alarm"
                class="text-zinc-600 dark:text-zinc-400"
                size="16"
              />
              <p class="text-sm font-medium dark:text-zinc-200">
                {{ modalFood.food.time }} min
              </p>
            </div>
          </div>
          <div class="flex flex-row items-center justify-between my-2">
            <p class="text-lg font-semibold dark:text-zinc-200">
              {{ useFormatMoney(modalFood.food.price) }}
            </p>
            <div
              class="border border-zinc-400 rounded-lg px-4 py-2 flex flex-row gap-4"
            >
              <div
                class="group border border-orange-500 w-7 h-7 rounded-full flex items-center justify-center hover:bg-orange-500 transition-all"
                @click="decreseQuantity"
              >
                <Icon
                  name="material-symbols:check-indeterminate-small-rounded"
                  size="20"
                  class="group-hover:text-white dark:text-zinc-200 transition-all"
                />
              </div>
              <p class="font-semibold dark:text-zinc-200">{{ quantity }}</p>
              <div
                class="group border border-orange-500 w-7 h-7 rounded-full flex items-center justify-center hover:bg-orange-500 transition-all"
                @click="increaseQuantity"
              >
                <Icon
                  name="material-symbols:add-rounded"
                  size="20"
                  class="group-hover:text-white dark:text-zinc-200 transition-all"
                />
              </div>
            </div>
          </div>
          <div class="border-b border-zinc-200 mb-2" />
          <p class="text-lg font-semibold dark:text-zinc-200">Descrição</p>
          <p class="text-sm dark:text-zinc-200">
            {{ modalFood.food.description }}
          </p>
          <button
            class="w-full text-white bg-orange-500 py-3 rounded-lg hover:bg-orange-600 transition-all font-semibold disabled:opacity-50 disabled:cursor-not-allowed mt-5"
            @click="handleAddToCart"
          >
            <div class="flex flex-row items-center gap-2 justify-center">
              <Icon
                name="material-symbols:shopping-cart-outline"
                color="#FFF"
                size="20"
              />
              <p>Adicionar ao carrinho</p>
            </div>
          </button>
        </div>
      </div>
    </OnClickOutside>
  </div>
</template>

<script setup>
import { OnClickOutside } from "@vueuse/components";
import { v4 as uuidv4 } from "uuid";

const modalFood = useModalFoodStore();
const cartStore = useCartStore();
const runtimeConfig = useRuntimeConfig();
const user = useSupabaseUser();

const quantity = ref(1);
const favoriting = ref(false);
const isFavorite = ref(false);

watch(
  () => modalFood.showModal,
  () => {
    if (modalFood.showModal) {
      findFavorite();
    }
  }
);

const increaseQuantity = () => {
  quantity.value++;
};

const decreseQuantity = () => {
  if (quantity.value > 1) {
    quantity.value--;
  }
};

const handleAddToCart = () => {
  cartStore.addToCart({
    id: uuidv4(),
    productId: modalFood.food.id,
    quantity: quantity.value,
    name: modalFood.food.name,
    price: modalFood.food.price,
    image: modalFood.food.image,
    rate: modalFood.food.rate,
    time: modalFood.food.time,
  });
  quantity.value = 1;
  modalFood.toggleModal();
};

const findFavorite = async () => {
  favoriting.value = true;
  const response = await $fetch(
    `/product/${modalFood.food.id}/favorite/${user.value.id}`,
    {
      baseURL: runtimeConfig.public.apiUrl,
      method: "GET",
    }
  );

  if (response?.id) {
    isFavorite.value = true;
  } else {
    isFavorite.value = false;
  }
  favoriting.value = false;
};

const toggleFavorite = async () => {
  favoriting.value = true;
  const response = await $fetch(
    `/product/${modalFood.food.id}/favorite/${user.value.id}`,
    {
      baseURL: runtimeConfig.public.apiUrl,
      method: "POST",
      body: {},
    }
  );
  if (response) {
    isFavorite.value = !isFavorite.value;
  }
  favoriting.value = false;
};
</script>

<style></style>
