<template>
  <div
    :key="restaurant"
    class="shadow-md flex flex-col rounded-lg cursor-pointer bg-zinc-50 dark:bg-zinc-900"
    @click="handleGoToRestaurant(restaurant.id)"
  >
    <img
      :src="runtimeConfig.public.bucketUrl + '/' + restaurant.image"
      alt="restaurant.title"
      class="rounded-t-lg object-cover h-24"
    />
    <h3 class="text-xs font-semibold text-center pt-2 px-2 dark:text-zinc-200">
      {{ restaurant.name }}
    </h3>
    <div
      class="flex flex-row items-center justify-between gap-1 text-xs px-2 pb-2"
    >
      <p class="dark:text-zinc-200">
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
        <Icon name="material-symbols:star" size="12" class="text-orange-500" />
        <Icon name="material-symbols:star" size="12" class="text-orange-500" />
        <Icon name="material-symbols:star" size="12" class="text-orange-500" />
        <Icon name="material-symbols:star" size="12" class="text-orange-500" />
        <Icon name="material-symbols:star" size="12" class="text-orange-500" />
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  restaurant: Object,
});

const router = useRouter();
const runtimeConfig = useRuntimeConfig();

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

const handleGoToRestaurant = (id) => {
  router.push({
    name: "Restaurant",
    params: { id },
  });
};
</script>

<style></style>
