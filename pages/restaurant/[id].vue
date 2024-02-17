<template>
  <div class="flex flex-col w-full h-calc(100%-30px) px-2 pt-20">
    <div class="flex flex-row w-full relative">
      <img
        src="https://designportugal.net/wp-content/uploads/2016/04/m-mcdonalds.jpg"
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

    <div class="flex flex-row items-center justify-between mt-5 mb-2">
      <h1 class="font-bold text-3xl">McDonald's</h1>
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

    <div class="flex flex-row items-center justify-between gap-2 mb-1">
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

    <p>
      Laborum et sunt tempor duis ullamco amet deserunt do incididunt ea magna
      est. Amet duis nisi consectetur pariatur exercitation est anim dolore
      consectetur pariatur veniam laboris exercitation. Sit officia laborum
      occaecat minim deserunt culpa ex et aute cillum.
    </p>
  </div>
</template>

<script setup>
definePageMeta({
  name: "Restaurant",
  layout: "authenticated",
});

const currentLatitude = ref(null);
const currentLongitude = ref(null);

onMounted(() => {
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
