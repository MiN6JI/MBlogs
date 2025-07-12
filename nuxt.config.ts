// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      apiBase: process.env.BASE_URL,
    },
  },
  modules: ["@nuxt/ui", "@nuxt/icon"],
  css: ["~/assets/css/main.css"],
  components: [{ path: "~/components", pathPrefix: false }],
  appConfig: {
    ui: {
      // colorMode: false,
      container: {
        base: "w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-10",
      },
    },
  },
});
