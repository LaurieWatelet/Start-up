// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  build: {
    transpile: ["tslib"],
  },
  devtools: { enabled: true },
  modules: ["@nuxtjs/apollo", "@nuxtjs/tailwindcss", "@nuxt/image"],
  apollo: {
    clients: {
      default: {
        httpEndpoint: "https://eu-central-1-shared-euc1-02.cdn.hygraph.com/content/clq0ntyxesobe01un19q45n9x/master",
      },
    },
  },
});
