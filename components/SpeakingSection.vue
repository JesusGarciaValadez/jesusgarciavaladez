<template>
  <Section v-bind="props">
    <div class="space-y-16">
      <slot />
    </div>
  </Section>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import Section from '~/components/TheSection.vue'

const props = defineProps({
  title: {
    type: String,
    default: '',
  },
})
</script>
