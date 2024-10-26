<template>
  <UContainer class="h-screen py-6">
    <div
      class="grid grid-cols-2 rounded-lg divide-y divide-gray-200 dark:divide-gray-800 ring-1 ring-gray-200 dark:ring-gray-800 shadow bg-white dark:bg-gray-900 h-full py-6 px-0"
    >
      <div class="h-full flex flex-col justify-between items-center py-8">
        <div class="max-w-sm space-y-8 flex-1 flex flex-col justify-center">
            <slot />
        </div>
        <div class="max-w-sm">
          <slot name="footer" />
        </div>
      </div>
      <UCard class="h-full bg-gray-50 dark:bg-gray-800 rounded-r-none" />
    </div>
  </UContainer>
</template>

<script lang="ts" setup></script>

<style></style>
