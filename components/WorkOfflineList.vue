<template>
  <li class="my-2 sm:my-0 md:my-0 lg:my-0 xl:my-0 text-sky-700">
    {{ props.work.name }}
  </li>
</template>

<script lang="ts" setup>
const props = defineProps({
  work: {
    type: Object,
    required: true,
  },
})
</script>
