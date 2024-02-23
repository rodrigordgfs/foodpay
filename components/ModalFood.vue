<template>
  <div
    v-if="modalFood.showModal"
    class="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center"
  >
    <OnClickOutside @trigger="modalFood.toggleModal">
      <div class="bg-white shadow p-2 m-5 rounded-2xl">
        <div class="flex flex-col">
          <div class="flex flex-row relative rounded-lg">
            <img
              :src="runtimeConfig.public.bucketUrl + '/' + modalFood.food.image"
              class="rounded-tl-lg rounded-tr-lg w-96 h-40 shadow object-cover"
            />
            <div
              class="group absolute top-2 left-2 bg-white rounded-lg p-2 h-10 2-10 flex items-center justify-center shadow hover:bg-orange-500 transition-all cursor-pointer"
            >
              <Icon
                name="material-symbols:favorite-outline"
                size="24"
                class="text-orange-500 group-hover:text-white transition-all"
              />
              <!-- <Icon name="material-symbols:favorite" size="24" class="text-orange-500" /> -->
            </div>
            <div
              class="group absolute top-2 right-2 rounded-lg p-2 h-10 2-10 flex items-center justify-center shadow transition-all cursor-pointer"
              @click="modalFood.toggleModal"
            >
              <Icon
                name="ic:outline-close"
                size="24"
                class="text-white transition-all group-hover:text-orange-500"
              />
            </div>
          </div>
          <h2 class="font-bold text-2xl text-center my-2">
            {{ modalFood.food.name }}
          </h2>
          <div class="flex flex-row items-center justify-center gap-2">
            <div class="flex flex-row items-center gap-1">
              <Icon
                name="material-symbols:star"
                size="16"
                class="text-orange-500"
              />
              <p class="text-sm font-medium">4.5</p>
            </div>
            <div class="flex flex-row items-center gap-1">
              <Icon
                name="material-symbols:alarm"
                class="text-zinc-600"
                size="16"
              />
              <p class="text-sm font-medium">{{ modalFood.food.time }} min</p>
            </div>
          </div>
          <div class="flex flex-row items-center justify-between my-2">
            <p class="text-lg font-semibold">
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
                  class="group-hover:text-white transition-all"
                />
              </div>
              <p class="font-semibold">{{ quantity }}</p>
              <div
                class="group border border-orange-500 w-7 h-7 rounded-full flex items-center justify-center hover:bg-orange-500 transition-all"
                @click="increaseQuantity"
              >
                <Icon
                  name="material-symbols:add-rounded"
                  size="20"
                  class="group-hover:text-white transition-all"
                />
              </div>
            </div>
          </div>
          <div class="border-b border-zinc-200 mb-2" />
          <p class="text-lg font-semibold">Descrição</p>
          <p class="text-sm">{{ modalFood.food.description }}</p>
          <button
            class="w-full text-white bg-orange-500 py-3 rounded-lg hover:bg-orange-600 transition-all font-semibold disabled:opacity-50 disabled:cursor-not-allowed mt-5"
            type="submit"
            :disabled="isSubmitting"
          >
            <Icon
              v-if="isSubmitting"
              name="line-md:loading-loop"
              color="#FFF"
              size="24"
            />
            <div v-else class="flex flex-row items-center gap-2 justify-center">
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

const modalFood = useModalFoodStore();
const runtimeConfig = useRuntimeConfig();

const quantity = ref(1);
const isSubmitting = ref(false);

const increaseQuantity = () => {
  quantity.value++;
};

const decreseQuantity = () => {
  if (quantity.value > 1) {
    quantity.value--;
  }
};
</script>

<style></style>
