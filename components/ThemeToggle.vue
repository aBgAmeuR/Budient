<template>
  <!-- A Button to switch between color mode. change icon based on the current color mode.
  i-heroicons:moon-20-solid
  i-heroicons:sun-20-solid -->
  <UButton
    :icon="
      $colorMode.preference === 'dark'
        ? 'i-heroicons:moon-20-solid'
        : 'i-heroicons:sun-20-solid'
    "
    variant="ghost"
    aria-label="Changer de thème"
    class="text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800"
    @click="
      $colorMode.preference =
        $colorMode.preference === 'dark' ? 'light' : 'dark'
    "
  />
</template>

<script lang="ts" setup></script>

<style></style>
