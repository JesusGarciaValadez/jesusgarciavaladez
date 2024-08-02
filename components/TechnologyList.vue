<template>
  <li class="my-2 sm:my-0 md:my-0 lg:my-0 xl:my-0">{{ props.technology.name }}</li>
</template>

<script lang="ts" setup>
const props = defineProps({
  technology: {
    type: Object,
    required: true,
  },
})
</script>
