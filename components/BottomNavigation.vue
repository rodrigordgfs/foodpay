<template>
  <div
    class="flex flex-row w-full items-center justify-around border-t border-zinc-400 fixed bottom-0 py-2"
  >
    <div
      class="group flex flex-col items-center text-zinc-800 rounded-lg p-1 w-20 hover:bg-orange-500 hover:text-white transition-all"
      @click="handleGoTo('Home')"
    >
      <Icon
        name="ci:home-outline"
        size="24"
        :class="{ 'text-orange-500 group-hover:text-white': isHome }"
      />
      <p
        class="font-semibold text-sm"
        :class="{ 'text-orange-500 font-bold group-hover:text-white': isHome }"
      >
        Início
      </p>
    </div>
    <div
      class="group flex flex-col items-center text-zinc-800 rounded-lg p-1 w-20 hover:bg-orange-500 hover:text-white transition-all"
      @click="handleGoTo('Cart')"
    >
      <Icon
        name="material-symbols:shopping-cart-outline"
        size="24"
        :class="{ 'text-orange-500 group-hover:text-white': isCart }"
      />
      <p
        class="font-semibold text-sm"
        :class="{ 'text-orange-500 font-bold group-hover:text-white': isCart }"
      >
        Carrinho
      </p>
    </div>
    <div
      class="group flex flex-col items-center text-zinc-800 rounded-lg p-1 w-20 hover:bg-orange-500 hover:text-white transition-all"
      @click="handleGoTo('Favorite')"
    >
      <Icon
        name="material-symbols:favorite-outline"
        size="24"
        :class="{ 'text-orange-500 group-hover:text-white': isFavorite }"
      />
      <p
        class="font-semibold text-sm"
        :class="{
          'text-orange-500 font-bold group-hover:text-white': isFavorite,
        }"
      >
        Favorito
      </p>
    </div>
    <div
      class="group flex flex-col items-center text-zinc-800 rounded-lg p-1 w-20 hover:bg-orange-500 hover:text-white transition-all"
      @click="handleGoTo('Profile')"
    >
      <Icon
        name="material-symbols:person-outline"
        size="24"
        :class="{ 'text-orange-500 group-hover:text-white': isProfile }"
      />
      <p
        class="font-semibold text-sm"
        :class="{
          'text-orange-500 font-bold group-hover:text-white': isProfile,
        }"
      >
        Perfil
      </p>
    </div>
  </div>
</template>

<script setup>
const route = useRoute();
const router = useRouter();

const isHome = computed(() => {
  return route.name === "Home";
});

const isCart = computed(() => {
  return route.name === "Cart";
});

const isFavorite = computed(() => {
  return route.name === "Favorite";
});

const isProfile = computed(() => {
  return route.name === "Profile";
});

const handleGoTo = (name) => {
  router.push({ name });
};
</script>

<style></style>
