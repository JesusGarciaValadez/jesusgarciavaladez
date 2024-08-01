<template>
  <img
    :class="props.className"
    src="https://avatars3.githubusercontent.com/u/1066733"
    alt="Jesús García profile photo"
    role="img"
    aria-label="Jesús García Profile Photo"
  >
</template>

<script lang="ts" setup>
const props = defineProps({
  className: {
    type: String,
    default: 'rounded-full h-32 w-32',
  },
  })
</script>
