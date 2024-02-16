<template>
  <div class="flex flex-row items-center">
    <div v-if="userLoocation" class="flex flex-row items-center gap-1">
      <Icon
        name="material-symbols:location-on"
        class="text-orange-500"
        size="24"
      />
      <p class="text-sm font-medium overflow-x-auto overflow-ellipsis">
        {{ userLoocation }}
      </p>
    </div>
    <div v-else class="flex flex-row items-center gap-1">
      <Icon name="line-md:loading-loop" class="text-orange-500" size="24" />
      <p class="text-sm font-medium">Carregando localização ...</p>
    </div>
  </div>
</template>

<script setup>
const runtimeConfig = useRuntimeConfig();

const userLoocation = ref(null);

onMounted(() => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(getUserLocation);
  } else {
    console.error("Geolocation is not supported by this browser.");
  }
});

const getUserLocation = (position) => {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;

  $fetch(
    `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${runtimeConfig.public.opencageApiKey}`
  ).then((data) => {
    const { road, city_district, state_code } = data.results[0].components;
    userLoocation.value = `${road}, ${city_district} - ${state_code}`;
  });
};
</script>

<style></style>
