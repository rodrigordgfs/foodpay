<template>
  <div class="flex flex-col w-full h-screen pb-[65px] px-2">
    <div class="flex flex-row w-full items-center justify-between py-4">
      <LocationSearch />
      <div
        class="group w-10 h-10 flex items-center justify-center rounded-full hover:bg-orange-500 transition-all"
      >
        <Icon
          name="material-symbols:notifications"
          size="24"
          class="text-orange-500 group-hover:text-white transition-all"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  name: "Home",
  layout: "authenticated",
});
</script>

<style></style>
