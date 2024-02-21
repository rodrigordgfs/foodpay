<template>
  <div class="flex flex-col w-full h-calc(100%-30px) px-2 pt-20">
    <LoaderSkeleton v-if="loadingRestaurant" class="w-full h-52" />
    <div v-else class="flex flex-row w-full relative">
      <img
        :src="runtimeConfig.public.bucketUrl + '/' + restaurant.image"
        class="w-full rounded-lg h-52 shadow object-cover"
      />
      <div
        class="absolute top-2 right-2 bg-white rounded-lg p-2 h-10 2-10 flex items-center justify-center shadow"
      >
        <Icon
          name="material-symbols:favorite-outline"
          size="24"
          class="text-orange-500"
        />
        <!-- <Icon name="material-symbols:favorite" size="24" class="text-orange-500" /> -->
      </div>
    </div>

    <div
      v-if="loadingRestaurant"
      class="flex flex-row items-center justify-between mt-5 mb-2"
    >
      <LoaderSkeleton class="w-[170px] h-[35px]" />
      <LoaderSkeleton class="w-[90px] h-[35px]" />
    </div>
    <div v-else class="flex flex-row items-center justify-between mt-5 mb-2">
      <h1 class="font-bold text-3xl">{{ restaurant.name }}</h1>
      <div
        class="border border-zinc-400 rounded-lg px-2 py-1 flex flex-row items-center gap-2"
      >
        <div class="relative w-3 h-3">
          <div
            class="animate-ping absolute h-full w-full rounded-full bg-green-500 opacity-75"
          />
          <div class="relative rounded-full h-3 w-3 bg-green-500" />
        </div>
        <p>Aberto</p>
      </div>
    </div>

    <div
      v-if="loadingRestaurant"
      class="flex flex-row items-center justify-between gap-2 mb-1"
    >
      <LoaderSkeleton class="w-[200px] h-[30px]" />
      <LoaderSkeleton class="w-[100px] h-[20px]" />
    </div>
    <div v-else class="flex flex-row items-center justify-between gap-2 mb-1">
      <div class="flex flex-row items-center gap-2">
        <Icon
          name="material-symbols:location-on"
          size="20"
          class="text-orange-500"
        />
        <p class="text-lg font-medium">
          {{
            useCalculateDistance(
              currentLatitude,
              currentLongitude,
              -30.8630406,
              -51.8205924
            )
          }}
          km de distância
        </p>
      </div>
      <div class="flex flex-row items-center">
        <Icon name="material-symbols:star" size="20" class="text-orange-500" />
        <Icon name="material-symbols:star" size="20" class="text-orange-500" />
        <Icon name="material-symbols:star" size="20" class="text-orange-500" />
        <Icon name="material-symbols:star" size="20" class="text-orange-500" />
        <Icon name="material-symbols:star" size="20" class="text-orange-500" />
      </div>
    </div>

    <LoaderSkeleton v-if="loadingRestaurant" class="w-full h-[120px]" />
    <p v-else>
      Laborum et sunt tempor duis ullamco amet deserunt do incididunt ea magna
      est. Amet duis nisi consectetur pariatur exercitation est anim dolore
      consectetur pariatur veniam laboris exercitation. Sit officia laborum
      occaecat minim deserunt culpa ex et aute cillum.
    </p>

    <div v-if="loadingRestaurant" class="flex flex-col gap-2 w-full mt-4">
      <div class="flex flex-row gap-2">
        <LoaderSkeleton
          v-for="index in 4"
          :key="index"
          class="w-full h-[35px] flex-1"
        />
      </div>
      <div class="grid grid-cols-3 gap-2">
        <LoaderSkeleton
          v-for="index in 6"
          :key="index"
          class="h-[144px] w-full"
        />
      </div>
    </div>
    <div v-else>
      <tabs
        v-if="restaurant.categories.length > 0"
        :tabs="restaurant.categories"
      >
        <template v-slot:0>
          <p>Conteúdo da Tab 1</p>
        </template>
        <template v-slot:1>
          <p>Conteúdo da Tab 2</p>
        </template>
        <template v-slot:2>
          <p>Conteúdo da Tab 3</p>
        </template>
        <template v-slot:3>
          <p>Conteúdo da Tab 4</p>
        </template>
        <template v-slot:4>
          <p>Conteúdo da Tab 5</p>
        </template>
      </tabs>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  name: "Restaurant",
  layout: "authenticated",
});

const restaurant = ref({});
const loadingRestaurant = ref(true);

const route = useRoute();
const runtimeConfig = useRuntimeConfig();

const currentLatitude = ref(null);
const currentLongitude = ref(null);

const getRestaurant = async () => {
  loadingRestaurant.value = true;
  const response = await $fetch(`/restaurant/${route.params.id}`, {
    baseURL: runtimeConfig.public.apiUrl,
    method: "GET",
  });

  if (response) {
    restaurant.value = response;
  }
  loadingRestaurant.value = false;
};

onMounted(() => {
  getRestaurant();
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(getUserLocation);
  } else {
    console.error("Geolocation is not supported by this browser.");
  }
});

const getUserLocation = (position) => {
  currentLatitude.value = position.coords.latitude;
  currentLongitude.value = position.coords.longitude;
};
</script>

<style></style>
