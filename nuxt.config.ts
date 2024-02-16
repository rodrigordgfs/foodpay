import path from "path";

export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  alias: {
    "@": path.resolve(__dirname, "./"),
    "~": path.resolve(__dirname, "./"),
  },
  modules: [
    "nuxt-icon",
    "@nuxtjs/supabase",
    "@pinia/nuxt",
    "@nuxt/image",
    "@pinia-plugin-persistedstate/nuxt",
  ],
  runtimeConfig: {
    public: {
      bucketUrl: process.env.BUCKET_URL,
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  supabase: { redirect: false },
  app: {
    head: {
      title: "FoodPay",
    },
  },
});
