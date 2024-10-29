<template>
  <Card as="article">
    <CardTitle :href="href">{{ title }}</CardTitle>
    <CardEyebrow decorate>{{ event }}</CardEyebrow>
    <CardDescription>{{ description }}</CardDescription>
    <CardCta>{{ cta }}</CardCta>
  </Card>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import Card from '~/components/TheCard.vue'

defineProps({
  title: String,
  description: String,
  event: String,
  cta: String,
  href: String,
})
</script>
