<template>
  <li class="my-2 sm:my-0 md:my-0 lg:my-0 xl:my-0 text-cool-gray-500">
    {{ work.name }}
  </li>
</template>

<script lang="ts">
export default {
  name: 'WorkOfflineList',
  props: {
    work: Object,
  },
}
</script>
