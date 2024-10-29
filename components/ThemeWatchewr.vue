<template>
  <div></div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import { useTheme } from 'next-themes'

const { resolvedTheme, setTheme } = useTheme()

function onMediaChange() {
  const media = window.matchMedia('(prefers-color-scheme: dark)')
  const systemTheme = media.matches ? 'dark' : 'light'
  if (resolvedTheme === systemTheme) {
    setTheme('system')
  }
}

onMounted(() => {
  const media = window.matchMedia('(prefers-color-scheme: dark)')
  onMediaChange()
  media.addEventListener('change', onMediaChange)
})

onUnmounted(() => {
  const media = window.matchMedia('(prefers-color-scheme: dark)')
  media.removeEventListener('change', onMediaChange)
})
</script>
