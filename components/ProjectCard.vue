<template>
  <Card as="li">
    <div class="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
      <NuxtImg :src="project.logo" alt="" class="h-8 w-8" unoptimized />
    </div>
    <h2 class="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
      <CardLink :href="project.link.href">{{ project.name }}</CardLink>
    </h2>
    <CardDescription>{{ project.description }}</CardDescription>
    <p class="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
      <LinkIcon class="h-6 w-6 flex-none" />
      <span class="ml-2">{{ project.link.label }}</span>
    </p>
  </Card>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import Card from '@/components/TheCard.vue'
import LinkIcon from '@/components/LinkIcon.vue'

defineProps({
  project: Object,
})
</script>
