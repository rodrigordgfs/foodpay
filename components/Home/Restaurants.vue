<template>
  <div class="w-full flex flex-col mt-4 gap-1">
    <div class="flex flex-row items-center justify-between">
      <h2 class="text-lg font-bold">Restaurantes</h2>
      <button
        class="text-zinc-500 rounded-lg py-1 px-3 font-semibold text-sm hover:text-orange-500 transition-all"
      >
        Ver todos
      </button>
    </div>
    <div class="grid grid-cols-3 gap-2 w-full mb-20">
      <div
        v-for="restaurant in rastaurants"
        :key="restaurant"
        class="shadow flex flex-col rounded-lg cursor-pointer"
      >
        <img
          :src="restaurant.image"
          alt="restaurant.title"
          class="rounded-t-lg object-cover h-24"
        />
        <h3 class="text-xs font-semibold text-center pt-2 px-2">
          {{ restaurant.title }}
        </h3>
        <div
          class="flex flex-row items-center justify-between gap-1 text-xs px-2 pb-2"
        >
          <p>
            {{
              useCalculateDistance(
                currentLatitude,
                currentLongitude,
                restaurant.latitude,
                restaurant.longitude
              )
            }}km
          </p>
          <div class="flex flex-row items-center">
            <Icon
              name="material-symbols:star"
              size="12"
              class="text-orange-500"
            />
            <Icon
              name="material-symbols:star"
              size="12"
              class="text-orange-500"
            />
            <Icon
              name="material-symbols:star"
              size="12"
              class="text-orange-500"
            />
            <Icon
              name="material-symbols:star"
              size="12"
              class="text-orange-500"
            />
            <Icon
              name="material-symbols:star"
              size="12"
              class="text-orange-500"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const rastaurants = ref([
  {
    title: "Burger King",
    image:
      "https://logosmarcas.net/wp-content/uploads/2020/10/Burger-King-Logo-1999-2021.jpg",
    rate: 4,
    latitude: -30.8503925,
    longitude: -51.8303005,
  },
  {
    title: "McDonald's",
    image:
      "https://designportugal.net/wp-content/uploads/2016/04/m-mcdonalds.jpg",
    rate: 4,
    latitude: -30.8630406,
    longitude: -51.8205924,
  },
  {
    title: "Burger King",
    image:
      "https://logosmarcas.net/wp-content/uploads/2020/10/Burger-King-Logo-1999-2021.jpg",
    rate: 4,
    latitude: -30.8578463,
    longitude: -51.8166442,
  },
  {
    title: "McDonald's",
    image:
      "https://designportugal.net/wp-content/uploads/2016/04/m-mcdonalds.jpg",
    rate: 4,
    latitude: -30.8578463,
    longitude: -51.8166442,
  },
  {
    title: "Burger King",
    image:
      "https://logosmarcas.net/wp-content/uploads/2020/10/Burger-King-Logo-1999-2021.jpg",
    rate: 4,
    latitude: -30.8485989,
    longitude: -51.8065591,
  },
  {
    title: "McDonald's",
    image:
      "https://designportugal.net/wp-content/uploads/2016/04/m-mcdonalds.jpg",
    rate: 4,
    latitude: -30.85022,
    longitude: -51.8141122,
  },
  {
    title: "Burger King",
    image:
      "https://logosmarcas.net/wp-content/uploads/2020/10/Burger-King-Logo-1999-2021.jpg",
    rate: 4,
    latitude: -30.8459092,
    longitude: -51.8115373,
  },
  {
    title: "McDonald's",
    image:
      "https://designportugal.net/wp-content/uploads/2016/04/m-mcdonalds.jpg",
    rate: 4,
    latitude: -30.8630406,
    longitude: -51.8205924,
  },
  {
    title: "Burger King",
    image:
      "https://logosmarcas.net/wp-content/uploads/2020/10/Burger-King-Logo-1999-2021.jpg",
    rate: 4,
    latitude: -30.8503925,
    longitude: -51.8303005,
  },
]);

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
