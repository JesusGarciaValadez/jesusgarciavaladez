<template>
  <Section v-bind="props">
    <ul role="list" class="space-y-16">
      <slot />
    </ul>
  </Section>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import Section from '~/components/TheSection.vue'

const props = defineProps()
</script>
