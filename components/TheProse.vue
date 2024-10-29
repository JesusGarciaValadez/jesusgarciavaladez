<template>
  <div :class="computedClassName" v-bind="props">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps } from 'vue'

const props = defineProps<{
  className?: string
}>()

const computedClassName = computed(() => {
  return [props.className, 'prose dark:prose-invert'].filter(Boolean).join(' ')
})
</script>
