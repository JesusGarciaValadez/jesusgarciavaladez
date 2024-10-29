<template>
  <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" v-bind="props">
    <path
      d="M7.25 11.25 3.75 8m0 0 3.5-3.25M3.75 8h8.5"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps<{
  class: string
}>()
</script>
