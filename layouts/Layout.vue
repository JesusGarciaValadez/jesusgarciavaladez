<template>
  <div class="fixed inset-0 flex justify-center sm:px-8">
    <div class="flex w-full max-w-7xl lg:px-8">
      <div class="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20" />
    </div>
  </div>
  <div class="relative flex w-full flex-col">
    <Header />
    <main class="flex-auto">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import Header from '~/components/TheHeader'
import Footer from '~/components/TheFooter'

defineProps<{
  children: any
}>()
</script>
