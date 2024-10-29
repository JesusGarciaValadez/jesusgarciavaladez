<template>
  <SimpleLayout
    title="Thank you for reaching out!"
    intro="We appreciate your interest and will get back to you as soon as possible."
  >
    <ThankYouMessage />
  </SimpleLayout>
</template>

<script setup lang="ts">
import { useHead } from '@vueuse/head'
import SimpleLayout from '~/layouts/SimpleLayout.vue'
import ThankYouMessage from '~/components/ThankYouMessage.vue'

useHead({
  title: 'Thank You',
  meta: [
    {
      name: 'description',
      content: 'Thank you for reaching out! We appreciate your interest and will get back to you as soon as possible.',
    },
  ],
})
</script>
