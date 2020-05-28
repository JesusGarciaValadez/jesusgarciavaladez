<template>
  <li class="my-2 sm:my-0 md:my-0 lg:my-0 xl:my-0">
    <a
      class="text-blue-700 font-bold underline"
      :href="work.url"
      :title="work.title"
      target="_blank"
      role="link"
      :aria-label="work.label"
      rel="noopener"
      >{{ work.name }}
    </a>
  </li>
</template>

<script lang="js">
export default {
  name: 'WorlOnlineList',
  props: {
    work: Object,
  },
};
</script>
