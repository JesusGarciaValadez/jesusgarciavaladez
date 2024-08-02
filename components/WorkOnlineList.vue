<template>
  <li class="my-2 sm:my-0 md:my-0 lg:my-0 xl:my-0">
    <a
      class="text-sky-700 underline"
      :href="props.work.url"
      :title="props.work.title"
      target="_blank"
      role="link"
      :aria-label="props.work.label"
      rel="noopener"
    >{{ props.work.name }}
    </a>
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
