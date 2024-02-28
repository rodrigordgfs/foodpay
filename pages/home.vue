<template>
  <div class="flex flex-col w-full h-screen items-center px-2 pt-16">
    <div class="max-w-container w-full">
      <div class="flex flex-col w-full items-center justify-between py-2">
        <LocationSearch />
      </div>

      <div class="flex flex-row w-full items-center gap-2">
        <form @submit.prevent="" class="flex-1">
          <div class="flex flex-col gap-1">
            <div
              class="flex flex-row items-center gap-2 rounded-md px-2 ring-1 ring-orange-500"
            >
              <Icon
                name="material-symbols:search-rounded"
                size="22"
                class="text-zinc-400"
              />
              <input
                type="text"
                class="flex-1 bg-transparent outline-none h-10 placeholder:text-zinc-500 text-sm"
                placeholder="Procure por comida ou restaurante"
                v-model="search"
              />
            </div>
          </div>
        </form>
        <div
          class="w-10 h-10 rounded-lg bg-orange-500 flex items-center justify-center hover:bg-orange-600 transition-all cursor-pointer"
        >
          <Icon
            name="material-symbols:filter-alt-outline-sharp"
            class="text-white"
            size="24"
          />
        </div>
      </div>

      <HomePopularFood />
      <HomeRestaurants />
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  name: "Home",
  layout: "authenticated",
});

const user = useSupabaseUser();
console.log("user", user.value.id);

const search = ref("");
</script>

<style></style>
