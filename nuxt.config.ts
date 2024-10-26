// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@nuxt/eslint", "@sidebase/nuxt-auth"],
  compatibilityDate: "2024-10-26",
  ui: {
    global: true
  },
})