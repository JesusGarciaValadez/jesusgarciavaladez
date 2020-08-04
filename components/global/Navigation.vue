<template>
  <div class="bg-cool-gray-800 pb-32">
    <nav class="bg-cool-gray-800">
      <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div class="border-b border-cool-gray-700">
          <div class="flex items-center justify-between h-16 px-4 sm:px-0">
            <div class="flex items-center">
              <div class="flex-shrink-0">
                <Photo className="h-10 w-10 rounded-full" />
              </div>
              <div class="hidden md:block">
                <div class="ml-10 flex items-baseline">
                  <nuxt-link
                    to="/"
                    :class="isHome
                      ? 'text-white bg-cool-gray-900'
                      : 'text-cool-gray-300 hover:text-white hover:bg-cool-gray-700'"
                    class="ml-4 px-3 py-2 rounded-md text-base font-sans focus:outline-none focus:text-white focus:bg-cool-gray-700"
                  >Home</nuxt-link>
                  <nuxt-link
                    to="/experience"
                    :class="isExperience
                      ? 'text-white bg-cool-gray-900'
                      : 'text-cool-gray-300 hover:text-white hover:bg-cool-gray-700'"
                    class="ml-4 px-3 py-2 rounded-md text-base font-sans focus:outline-none focus:text-white focus:bg-cool-gray-700"
                  >Experience</nuxt-link>
                  <nuxt-link
                    to="/portfolio"
                    :class="isPortfolio
                      ? 'text-white bg-cool-gray-900'
                      : 'text-cool-gray-300 hover:text-white hover:bg-cool-gray-700'"
                    class="ml-4 px-3 py-2 rounded-md text-base font-sans focus:outline-none focus:text-white focus:bg-cool-gray-700"
                  >Portfolio</nuxt-link>
                  <nuxt-link
                    to="/technologies"
                    :class="isTechnologies
                      ? 'text-white bg-cool-gray-900'
                      : 'text-cool-gray-300 hover:text-white hover:bg-cool-gray-700'"
                    class="ml-4 px-3 py-2 rounded-md text-base font-sans focus:outline-none focus:text-white focus:bg-cool-gray-700"
                  >Technologies</nuxt-link>
                  <nuxt-link
                    to="/community"
                    :class="isCommunity
                      ? 'text-white bg-cool-gray-900'
                      : 'text-cool-gray-300 hover:text-white hover:bg-cool-gray-700'"
                    class="ml-4 px-3 py-2 rounded-md text-base font-sans focus:outline-none focus:text-white focus:bg-cool-gray-700"
                  >Community</nuxt-link>
                </div>
              </div>
            </div>
            <div class="-mr-2 flex md:hidden">
              <!-- Mobile menu button -->
              <button
                class="inline-flex items-center justify-center p-2 rounded-md text-cool-gray-400 hover:text-white hover:bg-cool-gray-700 focus:outline-none focus:bg-cool-gray-700 focus:text-white"
                @click="isOn = !isOn"
              >
                <transition
                  enter-active-class="transition ease-out duration-100 transform"
                  enter-class="opacity-0 scale-95"
                  enter-to-class="opacity-100 scale-100"
                  leave-active-class="transition ease-in duration-75 transform"
                  leave-class="opacity-100 scale-100"
                  leave-to-class="opacity-0 scale-95"
                  css
                >
                  <!-- Menu open: "hidden", Menu closed: "block" -->
                  <svg :class="isOn ? 'hidden' : 'block'" class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </transition>
                <transition
                  enter-active-class="transition ease-out duration-100 transform"
                  enter-class="opacity-0 scale-95"
                  enter-to-class="opacity-100 scale-100"
                  leave-active-class="transition ease-in duration-75 transform"
                  leave-class="opacity-100 scale-100"
                  leave-to-class="opacity-0 scale-95"
                  css
                >
                  <!-- Menu open: "block", Menu closed: "hidden" -->
                  <svg :class="isOn ? 'block' : 'hidden'" class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </transition>
              </button>
            </div>
          </div>
        </div>
      </div>

      <!--
        Mobile menu, toggle classes based on menu state.

        Open: "block", closed: "hidden"
      -->
      <transition
        enter-active-class="transition ease-out duration-100 transform"
        enter-class="opacity-0 scale-95"
        enter-to-class="opacity-100 scale-100"
        leave-active-class="transition ease-in duration-75 transform"
        leave-class="opacity-100 scale-100"
        leave-to-class="opacity-0 scale-95"
        css
      >
        <div :class="isOn ? 'block' : 'hidden'" class="border-b border-cool-gray-700 md:hidden">
          <div class="px-2 py-3 sm:px-3">
            <nuxt-link
              to="/"
              :class="isHome
                ? 'text-white bg-cool-gray-900 '
                : 'text-cool-gray-300 hover:text-white hover:bg-cool-gray-700 '"
              class="mt-1 block px-3 py-2 rounded-md text-base font-sans focus:outline-none focus:text-white focus:bg-cool-gray-700"
            >Home</nuxt-link>
            <nuxt-link
              to="/experience"
              :class="isExperience
                ? 'text-white bg-cool-gray-900 '
                : 'text-cool-gray-300 hover:text-white hover:bg-cool-gray-700 '"
              class="mt-1 block px-3 py-2 rounded-md text-base font-sans focus:outline-none focus:text-white focus:bg-cool-gray-700"
            >Experience</nuxt-link>
            <nuxt-link
              to="/portfolio"
              :class="isPortfolio
                ? 'text-white bg-cool-gray-900 '
                : 'text-cool-gray-300 hover:text-white hover:bg-cool-gray-700 '"
              class="mt-1 block px-3 py-2 rounded-md text-base font-sans focus:outline-none focus:text-white focus:bg-cool-gray-700"
            >Porftolio</nuxt-link>
            <nuxt-link
              to="/technologies"
              :class="isTechnologies
                ? 'text-white bg-cool-gray-900 '
                : 'text-cool-gray-300 hover:text-white hover:bg-cool-gray-700 '"
              class="mt-1 block px-3 py-2 rounded-md text-base font-sans focus:outline-none focus:text-white focus:bg-cool-gray-700"
            >Technologies</nuxt-link>
            <nuxt-link
              to="/community"
              :class="isCommunity
                ? 'text-white bg-cool-gray-900 '
                : 'text-cool-gray-300 hover:text-white hover:bg-cool-gray-700 '"
              class="mt-1 block px-3 py-2 rounded-md text-base font-sans focus:outline-none focus:text-white focus:bg-cool-gray-700"
            >Community</nuxt-link>
          </div>
        </div>
      </transition>
    </nav>
    <header class="py-10">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 class="text-2xl md:text-3xl leading-9 font-bold font-sans text-white">
          Jesús García | {{
            this.$route.name === 'index'
            ? 'Full-Stack Software Engineer'
            : this.$route.name === 'about'
              ? 'About Me'
              : this.$route.name | capitalize
          }}
        </h1>
      </div>
    </header>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({
    data() {
      return {
        isOn: false,
      }
    },
    computed: {
      isHome: function () {
        return this.$route.name === 'index'
      },
      isExperience: function () {
        return this.$route.name === 'experience'
      },
      isPortfolio: function () {
        return this.$route.name === 'portfolio'
      },
      isTechnologies: function () {
        return this.$route.name === 'technologies'
      },
      isCommunity: function () {
        return this.$route.name === 'community'
      },
    },
    filters: {
      capitalize: function (value: string) {
        if (!value) return ''
        value = value.toString()
        return value.charAt(0).toUpperCase() + value.slice(1)
      }
    },
  })
</script>
