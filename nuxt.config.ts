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
    "@vite-pwa/nuxt",
  ],
  runtimeConfig: {
    public: {
      bucketUrl: process.env.BUCKET_URL,
      opencageApiKey: process.env.OPENCAGE_API_KEY,
      apiUrl: process.env.API_URL
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
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1, maximum-scale=1",
    },
  },
  pwa: {
    selfDestroying: true,
    manifest: {
      name: "FoodPay",
      short_name: "FoodPay",
      description: "A maneira mais fácil de pagar por suas delícias favoritas!",
      theme_color: "#000000",
      icons: [
        {
          src: "pwa-192x192.png",
          sizes: "192x192",
          type: "image/png",
        },
        {
          src: "pwa-512x512.png",
          sizes: "512x512",
          type: "image/png",
        },
      ],
    },
    devOptions: {
      enabled: true,
      type: "module",
    },
  },
});
