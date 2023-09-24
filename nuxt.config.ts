// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/apollo",
    "nuxt-icon",
    "@nuxtjs/color-mode",
    "@nuxt/image-edge",
    "@nuxtjs/ionic",
  ],
  css: [
    "@/assets/css/main.css",
    "@fortawesome/fontawesome-svg-core/styles.css",
  ],
  image: {
    domains: ["rickandmortyapi.com"],
  },
  colorMode: {
    classSuffix: "",
  },
  apollo: {
    clients: {
      default: {
        httpEndpoint: "https://rickandmortyapi.com/graphql",
      },
    },
  },
  ionic: {
    css: {
      utilities: true,
    },
  },
  app: {
    baseURL: '/frontend/',
    buildAssetsDir: 'assets',
  },
});
