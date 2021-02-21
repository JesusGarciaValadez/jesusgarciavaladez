<template>
  <div class="md:hidden h-6 w-6 absolute top-9 left-4 z-10">
    <button
      class="h-full w-full box-border p-0 inline-flex items-center justify-center rounded-md text-red-500 hover:text-red-500 focus:outline-none focus:text-red-700"
      @click="handleClick"
    >
      <transition
        name="close"
        enter-active-class="transition ease-out duration-100 transform-gpu"
        enter-class="opacity-0 scale-95"
        enter-to-class="opacity-100 scale-100"
        leave-active-class="transition ease-in duration-75 transform-gpu"
        leave-class="opacity-100 scale-100"
        leave-to-class="opacity-0 scale-95"
      >
        <svg
          v-show="this.$store.state.isOpen"
          class="h-full w-full"
          stroke="currentColor"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </transition>
    </button>
  </div>
</template>

<script>
export default {
  name: 'CloseButton',
  methods: {
    handleClick() {
      this.$store.commit('toggleMenu')
    },
  },
}
</script>
