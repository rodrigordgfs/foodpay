<template>
  <div class="flex flex-col w-full h-screen px-2 mb-20 pt-20 gap-4">
    <div class="flex flex-col items-center justify-center relative">
      <div class="max-h-40 flex flex-row relative">
        <img
          v-if="fileDisplay"
          :src="fileDisplay"
          class="w-36 h-36 rounded-full ring-2 ring-orange-500 shadow-md object-cover"
        />
        <img
          v-else-if="image"
          :src="image"
          class="w-36 h-36 rounded-full ring-2 ring-orange-500 shadow-md object-cover"
        />
        <div
          v-else
          class="w-36 h-36 rounded-full ring-2 ring-orange-500 shadow-md flex justify-center items-center bg-orange-600 uppercase text-white text-4xl"
        >
          {{ initialsName }}
        </div>
        <label
          for="fileInput"
          class="bg-orange-500 w-12 h-12 absolute bottom-2 right-0 -mb-5 rounded-full flex items-center justify-center hover:bg-orange-600 transition-all"
        >
          <Icon name="material-symbols:edit" size="24" class="text-white" />
          <input
            id="fileInput"
            ref="file"
            type="file"
            hidden
            accept=".jpg,.jpeg,.png"
            @input="onChange"
          />
        </label>
      </div>
      <h1 class="text-2xl font-bold mt-4">{{ name }}</h1>
      <p class="text-zinc-500 text-lg font-medium">{{ email }}</p>
    </div>
    <ul class="my-5 flex flex-col w-full items-center justify-center gap-3">
      <li class="group flex flex-row items-center gap-3">
        <Icon
          name="material-symbols:favorite-outline"
          size="26"
          class="text-zinc-800 group-hover:text-orange-500 transition-all"
        />
        <p
          class="flex-1 font-semibold text-xl mb-1 w-48 group-hover:text-orange-500 transition-all"
        >
          Favoritos
        </p>
        <Icon
          name="material-symbols:arrow-forward-ios"
          size="22"
          class="text-zinc-800 group-hover:text-orange-500 transition-all"
        />
      </li>
      <li class="group flex flex-row items-center gap-3">
        <Icon
          name="material-symbols:edit-square-outline"
          size="26"
          class="text-zinc-800 group-hover:text-orange-500 transition-all"
        />
        <p
          class="flex-1 font-semibold text-xl mb-1 w-48 group-hover:text-orange-500 transition-all"
        >
          Editar Perfil
        </p>
        <Icon
          name="material-symbols:arrow-forward-ios"
          size="22"
          class="text-zinc-800 group-hover:text-orange-500 transition-all"
        />
      </li>
      <li class="group flex flex-row items-center gap-3">
        <Icon
          name="material-symbols:add-notes-outline"
          size="26"
          class="text-zinc-800 group-hover:text-orange-500 transition-all"
        />
        <p
          class="flex-1 font-semibold text-xl mb-1 w-48 group-hover:text-orange-500 transition-all"
        >
          Histórico de Pedidos
        </p>
        <Icon
          name="material-symbols:arrow-forward-ios"
          size="22"
          class="text-zinc-800 group-hover:text-orange-500 transition-all"
        />
      </li>
      <li class="group flex flex-row items-center gap-3">
        <Icon
          name="ic:outline-payments"
          size="26"
          class="text-zinc-800 group-hover:text-orange-500 transition-all"
        />
        <p
          class="flex-1 font-semibold text-xl mb-1 w-48 group-hover:text-orange-500 transition-all"
        >
          Pagamentos
        </p>
        <Icon
          name="material-symbols:arrow-forward-ios"
          size="22"
          class="text-zinc-800 group-hover:text-orange-500 transition-all"
        />
      </li>
      <li class="group flex flex-row items-center gap-3">
        <Icon
          name="material-symbols:settings-rounded"
          size="26"
          class="text-zinc-800 group-hover:text-orange-500 transition-all"
        />
        <p
          class="flex-1 font-semibold text-xl mb-1 w-48 group-hover:text-orange-500 transition-all"
        >
          Configurações
        </p>
        <Icon
          name="material-symbols:arrow-forward-ios"
          size="22"
          class="text-zinc-800 group-hover:text-orange-500 transition-all"
        />
      </li>
      <li class="group flex flex-row items-center gap-3">
        <Icon
          name="material-symbols:help-center-outline"
          size="26"
          class="text-zinc-800 group-hover:text-orange-500 transition-all"
        />
        <p
          class="flex-1 font-semibold text-xl mb-1 w-48 group-hover:text-orange-500 transition-all"
        >
          Ajuda
        </p>
        <Icon
          name="material-symbols:arrow-forward-ios"
          size="22"
          class="text-zinc-800 group-hover:text-orange-500 transition-all"
        />
      </li>
      <li class="group flex flex-row items-center gap-3">
        <Icon
          name="simple-icons:aboutdotme"
          size="26"
          class="text-zinc-800 group-hover:text-orange-500 transition-all"
        />
        <p
          class="flex-1 font-semibold text-xl mb-1 w-48 group-hover:text-orange-500 transition-all"
        >
          Sobre Nós
        </p>
        <Icon
          name="material-symbols:arrow-forward-ios"
          size="22"
          class="text-zinc-800 group-hover:text-orange-500 transition-all"
        />
      </li>
    </ul>
    <div
      class="group flex flex-row items-center justify-center gap-3"
      @click="logout"
    >
      <Icon
        name="material-symbols:logout-sharp"
        size="26"
        class="text-zinc-800 group-hover:text-orange-500 transition-all"
      />
      <p
        class="font-semibold text-xl mb-1 w-56 group-hover:text-orange-500 transition-all"
      >
        Sair
      </p>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  name: "Profile",
  layout: "authenticated",
});

const runtimeConfig = useRuntimeConfig();
const client = useSupabaseClient();
const user = useSupabaseUser();
const cart = useCartStore();
const router = useRouter();

const file = ref(null);
const fileDisplay = ref(null);
const fileData = ref(null);

const name = computed(() => {
  return user?.value?.user_metadata?.name;
});

const image = computed(() => {
  return user?.value?.user_metadata?.image
    ? runtimeConfig.public.bucketUrl +
        "/user/" +
        user?.value?.user_metadata?.image
    : null;
});

const email = computed(() => {
  return user?.value?.email;
});

const initialsName = computed(() => {
  const name = String(user?.value?.user_metadata?.name).split(" ");
  return user?.value?.user_metadata?.name ? `${name[0][0]}${name[1][0]}` : null;
});

const onChange = () => {
  fileDisplay.value = URL.createObjectURL(file.value.files[0]);
  fileData.value = file.value.files[0];
  saveImage();
};

const saveImage = async () => {
  const { data, error } = await client.storage
    .from("users")
    .upload(`${user.value.id}.jpg`, fileData.value, {
      cacheControl: 3600,
      upsert: true,
    });

  if (error) {
    isSubmitting.value = false;
    return error;
  }

  if (data) {
    await client.auth.admin.updateUserById(user.value.id, {
      user_metadata: {
        ...user.value.user_metadata,
        image: data.path,
      },
    });
  }
};

const logout = async () => {
  await client.auth.signOut();
  cart.clearCart();
  router.push({
    name: "Login",
  });
};
</script>

<style></style>
