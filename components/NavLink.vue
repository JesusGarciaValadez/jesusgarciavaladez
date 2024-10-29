<template>
  <RouterLink :to="href" class="transition hover:text-teal-500 dark:hover:text-teal-400">
    <slot />
  </RouterLink>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import { RouterLink } from 'vue-router'

defineProps<{
  href: string
}>()
</script>
