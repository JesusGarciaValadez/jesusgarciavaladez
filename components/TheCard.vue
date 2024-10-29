<template>
  <component :is="Component" :class="['group relative flex flex-col items-start', className]">
    <slot />
  </component>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps<{
  as?: string
  className?: string
}>()

const Component = props.as || 'div'
</script>
