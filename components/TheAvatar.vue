<template>
  <router-link
    to="/"
    aria-label="Home"
    :class="[className, 'pointer-events-auto']"
    v-bind="props"
  >
    <img
      :src="avatarImage"
      alt=""
      :sizes="large ? '4rem' : '2.25rem'"
      :class="[
        'rounded-full bg-zinc-100 object-cover dark:bg-zinc-800',
        large ? 'h-16 w-16' : 'h-9 w-9',
      ]"
      priority
    />
  </router-link>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import avatarImage from '@/images/avatar.jpg'

const props = defineProps<{
  large?: boolean
  className: string
}>()
</script>
