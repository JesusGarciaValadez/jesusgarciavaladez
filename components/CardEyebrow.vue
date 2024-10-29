<template>
  <component :is="Component" :class="['relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500', className, { 'pl-3.5': decorate }]">
    <template v-if="decorate">
      <span class="absolute inset-y-0 left-0 flex items-center" aria-hidden="true">
        <span class="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500" />
      </span>
    </template>
    <slot />
  </component>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps<{
  as?: string
  decorate?: boolean
  className?: string
}>()

const Component = props.as || 'p'
</script>
