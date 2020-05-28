<template>
  <li class="my-2 sm:my-0 md:my-0 lg:my-0 xl:my-0 font-light">
    {{ technology.name }}
  </li>
</template>

<script lang="js">
export default {
  name: 'TechnologyList',
  props: {
    technology: Object,
  },
};
</script>
