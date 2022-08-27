import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  publicRuntimeConfig: {
    ENV_NAME: process.env.ENV_NAME,
  },

  css: ["~/assets/styles/main.scss"],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData:
            '@import "@/assets/styles/global/variables.scss"; @import "@/assets/styles/utils/mixins.scss";',
        },
      },
    },
  },

  modules: ["@pinia/nuxt"],

  typescript: {
    strict: true,
  },

  build: {
    loaders: {
      scss: {
        implementation: require("sass"),
      },
    },
  },

  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],
});
