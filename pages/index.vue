<template>
  <fragment>
    <Hero />
  </fragment>
</template>

<script lang="ts">
import Vue from 'vue'
import { Fragment } from 'vue-fragment'
import Hero from '../components/Hero.vue'

export default Vue.extend({
  components: {
    Fragment,
    Hero,
  },
  transition: 'test',
  loading: true,
})
</script>
