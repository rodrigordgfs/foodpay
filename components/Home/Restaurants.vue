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
        @click="router.push(`/restaurant/${restaurant.id}`)"
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
const router = useRouter();

const rastaurants = ref([
  {
    id: "1286ef5d-015f-4f24-9cd1-fa23009b7dfd",
    title: "Burger King",
    image:
      "https://logosmarcas.net/wp-content/uploads/2020/10/Burger-King-Logo-1999-2021.jpg",
    rate: 4,
    latitude: -30.8503925,
    longitude: -51.8303005,
  },
  {
    id: "7a016638-4d00-44d3-bd68-ffc81128f2ac",
    title: "McDonald's",
    image:
      "https://designportugal.net/wp-content/uploads/2016/04/m-mcdonalds.jpg",
    rate: 4,
    latitude: -30.8630406,
    longitude: -51.8205924,
  },
  {
    id: "6aa3aee4-8771-4ae5-939f-18cfecd8d78a",
    title: "Burger King",
    image:
      "https://logosmarcas.net/wp-content/uploads/2020/10/Burger-King-Logo-1999-2021.jpg",
    rate: 4,
    latitude: -30.8578463,
    longitude: -51.8166442,
  },
  {
    id: "dedb46fb-e09f-4198-acd5-04f1df10a7cd",
    title: "McDonald's",
    image:
      "https://designportugal.net/wp-content/uploads/2016/04/m-mcdonalds.jpg",
    rate: 4,
    latitude: -30.8578463,
    longitude: -51.8166442,
  },
  {
    id: "215de80d-a71b-4fd0-8484-6ba84b0cce73",
    title: "Burger King",
    image:
      "https://logosmarcas.net/wp-content/uploads/2020/10/Burger-King-Logo-1999-2021.jpg",
    rate: 4,
    latitude: -30.8485989,
    longitude: -51.8065591,
  },
  {
    id: "72810c49-3b7d-43b9-b67d-f33c6d04b1ef",
    title: "McDonald's",
    image:
      "https://designportugal.net/wp-content/uploads/2016/04/m-mcdonalds.jpg",
    rate: 4,
    latitude: -30.85022,
    longitude: -51.8141122,
  },
  {
    id: "32b5cc71-22b0-4b0e-9f17-1049c5bf8460",
    title: "Burger King",
    image:
      "https://logosmarcas.net/wp-content/uploads/2020/10/Burger-King-Logo-1999-2021.jpg",
    rate: 4,
    latitude: -30.8459092,
    longitude: -51.8115373,
  },
  {
    id: "54a2c5c2-0ee9-4685-9854-47db5ccd1d39",
    title: "McDonald's",
    image:
      "https://designportugal.net/wp-content/uploads/2016/04/m-mcdonalds.jpg",
    rate: 4,
    latitude: -30.8630406,
    longitude: -51.8205924,
  },
  {
    id: "a7fad0ee-7c33-4229-b4df-be4fe77692f1",
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
