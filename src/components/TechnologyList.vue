<template>
  <li class="my-2 sm:my-0 md:my-0 lg:my-0 xl:my-0 font-light">{{ tech.name }}</li>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'TechnologyList',
  props: ['technologies'],
});
</script>
