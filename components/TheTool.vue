<template>
  <Card as="li">
    <CardTitle :href="href">{{ title }}</CardTitle>
    <CardDescription>
      <slot />
    </CardDescription>
  </Card>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import Card from '~/components/TheCard.vue'

defineProps({
  title: String,
  href: String,
})
</script>
