<template>
  <div ref="outerRef" :class="['sm:px-8', className]" v-bind="props">
    <div class="mx-auto w-full max-w-7xl lg:px-8">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, ref } from 'vue'

const props = defineProps<{
  className?: string
}>()

const outerRef = ref<HTMLElement | null>(null)
</script>
