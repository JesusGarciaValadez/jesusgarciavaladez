<template>
  <img
    :class="className"
    src="https://avatars3.githubusercontent.com/u/1066733"
    alt="Jesús García profile photo"
    role="img"
    aria-label="Jesús García Profile Photo"
  />
</template>

<script>
  import Vue from 'vue'

  export default Vue.extend({
    props: ['className']
  })
</script>
