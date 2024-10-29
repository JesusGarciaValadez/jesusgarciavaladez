<script setup lang="ts">
import { defineProps, computed } from 'vue'
import { RouterLink } from 'vue-router'
import Button from '~/components/TheButton'

const variantStyles = {
  primary: 'bg-blue-500 text-white hover:bg-blue-600',
  secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
}

const props = defineProps<{
  variant?: keyof typeof variantStyles
  href?: string
}>()

const className = computed(() =>
  [
    'inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none',
    variantStyles[props.variant || 'primary'],
  ].join(' ')
)
</script>

<template>
  <RouterLink v-if="href" :to="href" :class="className">
    <slot />
  </RouterLink>
  <Button v-else :class="className">
    <slot />
  </Button>
</template>
