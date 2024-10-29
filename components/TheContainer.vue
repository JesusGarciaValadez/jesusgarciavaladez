<template>
  <ContainerOuter ref="containerRef" v-bind="props">
    <ContainerInner>
      <slot />
    </ContainerInner>
  </ContainerOuter>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ContainerInner from '~/components/ContainerInner.vue'
import ContainerOuter from '~/components/ContainerOuter.vue'

const containerRef = ref<HTMLElement | null>(null)
</script>
