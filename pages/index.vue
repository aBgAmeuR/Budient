<template>
  <UContainer>
    <UCard class="mt-10">
      <template #header>
        <div class="flex justify-between">
          <h1>Welcome to Nuxt UI Starter</h1>
          <ThemeToggle />
        </div>
      </template>
    </UCard>
    <UCard class="mt-10">
      <template #header>
        <h2>Auth Status</h2>
      </template>
      <pre>{{ status }}</pre>
      <UButton to="/auth/signIn">Se connecter</UButton>
      <UButton @click="signIn({ callbackUrl: '/' })">Se connecter v2</UButton>
      <UButton @click="signOut()">Se déconnecter</UButton>
      <pre v-if="data">{{ data }}</pre>
    </UCard></UContainer
  >
</template>

<script lang="ts" setup>
const { signIn, status, signOut, data } = useAuth();
</script>

<style></style>
