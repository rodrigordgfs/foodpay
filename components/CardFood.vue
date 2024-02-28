<template>
  <div
    class="shadow-md flex flex-col rounded-lg cursor-pointer bg-zinc-50 dark:bg-zinc-900"
    @click="handleOpenFood"
  >
    <div class="relative flex flex-col">
      <img
        :src="runtimeConfig.public.bucketUrl + '/' + food.image"
        alt="offer.title"
        class="rounded-t-lg object-cover h-24"
      />
    </div>
    <div class="flex flex-col p-2 gap-1">
      <h3 class="text-xs font-semibold text-center dark:text-zinc-200">
        {{ food.name }}
      </h3>
      <div
        class="flex flex-row items-center justify-between text-xs font-semibold"
      >
        <p class="dark:text-zinc-200">
          {{ useFormatMoney(food.price) }}
        </p>
        <div class="flex flex-row items-center">
          <Icon
            name="material-symbols:alarm"
            class="text-zinc-600 dark:text-zinc-400"
            size="14"
          />
          <p class="dark:text-zinc-200">{{ food.time }} min</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  food: Object,
});

const runtimeConfig = useRuntimeConfig();
const modalFood = useModalFoodStore();

const handleOpenFood = () => {
  modalFood.toggleModal();
  modalFood.setFood(props.food);
};
</script>

<style></style>
