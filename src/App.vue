<template>
  <div id="app" class="py-8 lg:py-16 px-6 md:px-16 lg:px-24">
    <navigation></navigation>
    <router-view/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Navigation from '@/components/Navigation.vue'; // @ is an alias to /src

export default Vue.extend({
  components: {
    Navigation,
  },
});
</script>
