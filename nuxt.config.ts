// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@nuxt/eslint", "@sidebase/nuxt-auth"],
  compatibilityDate: "2024-10-26",
  ui: {
    global: true,
  },
  runtimeConfig: {
    authSecret: process.env.NUXT_AUTH_SECRET,
  },
  auth: {
    provider: {
      type: "authjs",
      trustHost: false,
      defaultProvider: "credentials",
      addDefaultCallbackUrl: true,
    },
    baseURL: `http://localhost:${process.env.PORT || 3000}`,
  }
});
