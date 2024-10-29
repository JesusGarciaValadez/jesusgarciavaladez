<template>
  <component :is="Component" class="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
    <template v-if="href">
      <CardLink :href="href">
        <slot />
      </CardLink>
    </template>
    <template v-else>
      <slot />
    </template>
  </component>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import CardLink from './CardLink.vue'

const props = defineProps<{
  as?: string
  href?: string
}>()

const Component = props.as || 'h2'
</script>
