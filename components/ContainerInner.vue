<template>
  <div ref="innerRef" :class="['relative px-4 sm:px-8 lg:px-12', className]" v-bind="props">
    <div class="mx-auto max-w-2xl lg:max-w-5xl">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps } from 'vue'

const props = defineProps<{
  className?: string
}>()

const innerRef = ref<HTMLElement | null>(null)
</script>
