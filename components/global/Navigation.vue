<template>
  <div class="bg-gray-900">
    <nav>
      <DesktopMenu :current-hash="currentHash" />
      <MobileMenu :current-hash="currentHash" />
    </nav>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import DesktopMenu from './DesktopMenu.vue'
import MobileMenu from './MobileMenu.vue'

export default Vue.extend({
  components: {
    DesktopMenu,
    MobileMenu,
  },
  computed: {
    currentHash(): string {
      return this.$route.hash
    },
  },
})
</script>
