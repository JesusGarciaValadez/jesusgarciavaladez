<template>
  <li>
    <PopoverButton as="a" :href="href" class="block py-2">
      <slot />
    </PopoverButton>
  </li>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

defineProps<{
  href: string
}>()
</script>
