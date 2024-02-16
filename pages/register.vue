<template>
  <div class="w-full h-screen flex justify-center">
    <div
      class="max-w-container w-full px-2 flex flex-col items-center justify-center"
    >
      <h1 class="font-extrabold text-orange-500 text-3xl">Vamos começar!</h1>
      <p class="text-zinc-500 font-medium">Crie sua conta</p>

      <form @submit.prevent="handleSubmitForm" class="mt-4 flex flex-col gap-3">
        <div class="group flex flex-col gap-1">
          <div
            class="flex w-[300px] max-w-full flex-row items-center gap-3 rounded-lg px-4 ring-1 ring-zinc-500 group-focus-within:ring-1 group-focus-within:ring-orange-500 transition-all disabled:cursor-not-allowed"
            :class="{
              'ring-1 ring-red-500 focus:ring-red-500 group-focus-within:ring-red-500':
                v$.name.$error,
            }"
          >
            <Icon
              name="material-symbols:person"
              size="24"
              class="text-zinc-500 group-focus-within:text-orange-500 transition-all"
              :class="{
                'text-red-500 group-focus-within:text-red-500': v$.name.$error,
              }"
            />
            <input
              class="w-full bg-transparent outline-none h-12 placeholder:text-zinc-500"
              placeholder="Nome Completo"
              autocomplete="name"
              v-model="form.name"
              @change="v$.name.$touch"
            />
          </div>
          <span
            v-if="v$.name.$error"
            class="text-xs font-semibold text-red-500"
            >{{ v$.name.$errors[0].$message }}</span
          >
        </div>
        <div class="group flex flex-col gap-1">
          <div
            class="flex w-[300px] max-w-full flex-row items-center gap-3 rounded-lg px-4 ring-1 ring-zinc-500 group-focus-within:ring-1 group-focus-within:ring-orange-500 transition-all disabled:cursor-not-allowed"
            :class="{
              'ring-1 ring-red-500 focus:ring-red-500 group-focus-within:ring-red-500':
                v$.email.$error,
            }"
          >
            <Icon
              name="ic:baseline-email"
              size="24"
              class="text-zinc-500 group-focus-within:text-orange-500 transition-all"
              :class="{
                'text-red-500 group-focus-within:text-red-500': v$.email.$error,
              }"
            />
            <input
              type="email"
              class="w-full bg-transparent outline-none h-12 placeholder:text-zinc-500"
              placeholder="E-mail"
              autocomplete="email"
              v-model="form.email"
              @change="v$.email.$touch"
            />
          </div>
          <span
            v-if="v$.email.$error"
            class="text-xs font-semibold text-red-500"
            >{{ v$.email.$errors[0].$message }}</span
          >
        </div>
        <div class="group flex flex-col gap-1">
          <div
            class="flex w-[300px] max-w-full flex-row items-center gap-3 rounded-lg px-4 ring-1 ring-zinc-500 group-focus-within:ring-1 group-focus-within:ring-orange-500 transition-all disabled:cursor-not-allowed"
            :class="{
              'ring-1 ring-red-500 focus:ring-red-500 group-focus-within:ring-red-500':
                v$.password.$error,
            }"
          >
            <Icon
              name="ic:outline-lock"
              size="24"
              class="text-zinc-500 group-focus-within:text-orange-500 transition-all"
              :class="{
                'text-red-500 group-focus-within:text-red-500':
                  v$.password.$error,
              }"
            />
            <input
              :type="passwordType"
              class="w-full bg-transparent outline-none h-12 placeholder:text-zinc-500"
              placeholder="Senha"
              autocomplete="new-password"
              v-model="form.password"
              @change="v$.password.$touch"
            />
            <Icon
              v-if="!showPassword"
              name="ic:outline-remove-red-eye"
              size="24"
              class="text-zinc-500 group-focus-within:text-orange-500 hover:text-orange-500 transition-all cursor-pointer"
              :class="{
                'text-red-500 group-focus-within:text-red-500':
                  v$.password.$error,
              }"
              @click="togglePassword"
            />
            <Icon
              v-else
              name="ic:baseline-remove-red-eye"
              size="24"
              class="text-zinc-500 group-focus-within:text-orange-500 hover:text-orange-500 transition-all cursor-pointer"
              :class="{
                'text-red-500 group-focus-within:text-red-500':
                  v$.password.$error,
              }"
              @click="togglePassword"
            />
          </div>
          <span
            v-if="v$.password.$error"
            class="text-xs font-semibold text-red-500"
            >{{ v$.password.$errors[0].$message }}</span
          >
        </div>
        <div class="group flex flex-col gap-1">
          <div
            class="flex w-[300px] max-w-full flex-row items-center gap-3 rounded-lg px-4 ring-1 ring-zinc-500 group-focus-within:ring-1 group-focus-within:ring-orange-500 transition-all disabled:cursor-not-allowed"
            :class="{
              'ring-1 ring-red-500 focus:ring-red-500 group-focus-within:ring-red-500':
                v$.confirmPassword.$error,
            }"
          >
            <Icon
              name="ic:outline-lock"
              size="24"
              class="text-zinc-500 group-focus-within:text-orange-500 transition-all"
              :class="{
                'text-red-500 group-focus-within:text-red-500':
                  v$.confirmPassword.$error,
              }"
            />
            <input
              :type="confirmPasswordType"
              class="w-full bg-transparent outline-none h-12 placeholder:text-zinc-500"
              placeholder="Confirmar Senha"
              autocomplete="new-password"
              v-model="form.confirmPassword"
              @change="v$.confirmPassword.$touch"
            />
            <Icon
              v-if="!showConfirmPassword"
              name="ic:outline-remove-red-eye"
              size="24"
              class="text-zinc-500 group-focus-within:text-orange-500 hover:text-orange-500 transition-all cursor-pointer"
              :class="{
                'text-red-500 group-focus-within:text-red-500':
                  v$.confirmPassword.$error,
              }"
              @click="toggleConfirmPassword"
            />
            <Icon
              v-else
              name="ic:baseline-remove-red-eye"
              size="24"
              class="text-zinc-500 group-focus-within:text-orange-500 hover:text-orange-500 transition-all cursor-pointer"
              :class="{
                'text-red-500 group-focus-within:text-red-500':
                  v$.confirmPassword.$error,
              }"
              @click="toggleConfirmPassword"
            />
          </div>
          <span
            v-if="v$.confirmPassword.$error"
            class="text-xs font-semibold text-red-500"
            >{{ v$.confirmPassword.$errors[0].$message }}</span
          >
        </div>
        <button
          class="w-full text-white bg-orange-500 py-3 rounded-lg hover:bg-orange-600 transition-all uppercase font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
          type="submit"
          :disabled="isSubmitting"
        >
          <Icon
            v-if="isSubmitting"
            name="eos-icons:bubble-loading"
            color="#FFF"
            size="24"
          />
          <p v-else>Entrar</p>
        </button>
      </form>

      <p
        class="text-zinc-500 text-sm font-semibold mt-4"
        @click="handleGoToLogin"
      >
        Ja tem uma conta?
        <span
          class="text-orange-500 font-bold hover:text-orange-600 transition-all"
          >Entrar</span
        >
      </p>
    </div>
  </div>
</template>

<script setup>
import {
  required,
  email,
  sameAs,
  minLength,
  helpers,
} from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";

definePageMeta({
  name: "Register",
  middleware: "auth-state-change",
});

const userStore = useUserStore();
const user = useSupabaseUser();
const router = useRouter();

const form = ref({
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
});

const showPassword = ref(false);
const passwordType = computed(() => (showPassword.value ? "text" : "password"));
const togglePassword = () => (showPassword.value = !showPassword.value);

const showConfirmPassword = ref(false);
const confirmPasswordType = computed(() =>
  showConfirmPassword.value ? "text" : "password"
);
const toggleConfirmPassword = () =>
  (showConfirmPassword.value = !showConfirmPassword.value);

const isSubmitting = ref(false);

const rules = computed(() => {
  return {
    name: {
      required: helpers.withMessage(
        "O campo nome completo é obrigatório",
        required
      ),
    },
    email: {
      required: helpers.withMessage("O campo e-mail é obrigatório", required),
      email: helpers.withMessage("Formato de email inválido", email),
    },
    password: {
      required: helpers.withMessage("O campo de senha é necessária", required),
      minLength: helpers.withMessage(
        "A senha deve ter pelo menos 6 caracteres",
        minLength(6)
      ),
    },
    confirmPassword: {
      required: helpers.withMessage(
        "O campo de confirmação de senha é necessária",
        required
      ),
      sameAs: helpers.withMessage(
        "As senhas não coincidem",
        sameAs(form.value.password)
      ),
    },
  };
});

const v$ = useVuelidate(rules, form);

onBeforeMount(() => {
  if (user.value) {
    router.push({ name: "Home" });
  }
});

const handleSubmitForm = async () => {
  v$.value.$validate();
  if (!v$.value.$error) {
    isSubmitting.value = true;
    await userStore.register(
      form.value.name,
      form.value.email,
      form.value.password
    );
    isSubmitting.value = false;
  }
};

const handleGoToLogin = () => {
  router.push({
    name: "Login",
  });
};
</script>

<style></style>
