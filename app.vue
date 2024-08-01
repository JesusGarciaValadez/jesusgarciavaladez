<template>
  <div>
    <NuxtLayout />
  </div>
</template>

<script setup>
// Use SSR-safe IDs for Headless UI
provideHeadlessUseId(() => useId())
</script>
