<template>
  <li>
    <a
      :href="href"
      :class="[
        'relative block px-3 py-2 transition',
        isActive
          ? 'text-teal-500 dark:text-teal-400'
          : 'hover:text-teal-500 dark:hover:text-teal-400',
      ]"
    >
      <slot />
      <span
        v-if="isActive"
        class="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0 dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0"
      />
    </a>
  </li>
</template>

<script setup lang="ts">
import { defineProps, computed } from 'vue'
import { useRoute } from 'vue-router'

const props = defineProps<{
  href: string
}>()

const route = useRoute()
const isActive = computed(() => route.path === props.href)
</script>
