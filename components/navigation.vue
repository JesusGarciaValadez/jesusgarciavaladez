<template>
  <fragment>
    <header
      class="bg-white rounded-none sm:rounded-b-none md:rounded-lg md:rounded-b-none lg:rounded-lg lg:rounded-b-none xl:rounded-lg xl:rounded-b-none xl:rounded-b-none p-4 pt-4 sm:pt-4 md:pt-4 lg:pt-10 xl:pt-10 lg:mt-10 xl:mt-10 relative z-20 flex justify-between lg:justify-center xl:justify-center items-center"
    >
      <div class="flex md:block lg:flex lg:flex-col items-center max-w-full">
        <div
          class="mb-0 md:mb-4 lg:mb-0 flex flex-no-shrink pr-4 md:pr-6 lg:pr-0"
          role="banner"
        >
          <nuxt-link
            class="flex items-center no-underline"
            role="link"
            to="/"
            aria-label="Jesús García Web Page"
          >
            <img
              class="h-10 w-10 md:h-12 md:w-12 lg:h-64 lg:w-64 rounded-full"
              src="https://avatars3.githubusercontent.com/u/1066733"
              alt="Jesús García profile photo"
              role="img"
              aria-label="Jesús García Profile Photo"
            />
          </nuxt-link>
        </div>
        <div
          class="lg:w-full lg:flex lg:flex-col lg:justify-center lg:align-center lg:mt-10 lg:mx-4"
          role="navigation"
        >
          <nuxt-link
            class="block text-gray-900 no-underline font-bold text-xl lg:text-3xl font-extrabold leading-none lg:leading-tight lg:text-center"
            to="/"
            role="link"
            aria-label="Jesús García Web Page"
          >
            Jesús García Valadez</nuxt-link
          >
          <nav
            class="hidden md:flex lg:flex xl:flex mt-3 lg:mt-4 uppercase tracking-wide text-xs space-x-6"
            role="navigation"
          >
            <nuxt-link
              class="text-blue-700 font-bold no-underline hover:text-gray-900"
              role="link"
              to="/jobs"
              aria-label="Jobs"
            >
              Jobs</nuxt-link
            >
            <nuxt-link
              class="text-blue-700 font-bold no-underline hover:text-gray-900"
              role="link"
              to="/works"
              aria-label="Works"
            >
              Works</nuxt-link
            >
            <nuxt-link
              class="text-blue-700 font-bold no-underline hover:text-gray-900"
              role="link"
              to="/technologies"
              aria-label="Technologies"
            >
              Technologies</nuxt-link
            >
            <nuxt-link
              class="text-blue-700 font-bold no-underline hover:text-gray-900"
              role="link"
              to="/education"
              aria-label="Community & Education"
            >
              Community & Education</nuxt-link
            >
          </nav>
        </div>
      </div>
      <div class="block md:hidden object-center object-cover">
        <p class="block md:hidden lg:hidden xl:hidden">
          <a
            v-show="!show"
            class="text-gray-900 text-4xl tracking-tighter"
            role="button"
            aria-label="Show navigation menu"
            @click="toggleShow"
          >&equiv;</a
          >
          <a
            v-show="show"
            class="text-gray-900 text-4xl tracking-tighter"
            style="display: none;"
            role="button"
            aria-hidden="true"
            aria-label="Close navigation menu"
            @click="toggleShow"
          >&#88;</a
          >
        </p>
      </div>
    </header>
    <transition name="fade" mode="out-in" appear css type="animation">
      <div
        v-show="show"
        class="md:hidden z-10 bg-white fixed inset-0 pt-24 block"
        style="display: none;"
        aria-hidden="true"
        role="navigation"
      >
        <nav
          class="space-y-8 overflow-y-auto pt-20 pb-8 px-12 max-h-full overflow-y-auto"
          role="navigation"
        >
          <p @click="toggleShow">
            <nuxt-link
              class="block text-2xl text-blue-700 font-bold no-underline"
              role="link"
              to="/jobs"
              aria-label="Jobs"
            >Jobs</nuxt-link
            >
          </p>
          <p @click="toggleShow">
            <nuxt-link
              class="block text-2xl text-blue-700 font-bold no-underline"
              role="link"
              to="/works"
              aria-label="Works"
            >Works</nuxt-link
            >
          </p>
          <p @click="toggleShow">
            <nuxt-link
              class="block text-2xl text-blue-700 font-bold no-underline"
              role="link"
              to="/technologies"
              aria-label="Works"
            >Technologies</nuxt-link
            >
          </p>
          <p @click="toggleShow">
            <nuxt-link
              class="block text-2xl text-blue-700 font-bold no-underline"
              role="link"
              to="/education"
              aria-label="Community & Education"
            >Community & Education</nuxt-link
            >
          </p>
        </nav>
      </div>
    </transition>
  </fragment>
</template>

<script lang="ts">
  import { Fragment } from 'vue-fragment'
  import Vue from "vue";

  export default Vue.extend({
    components: { Fragment },
    data() {
      return {
        show: false,
      }
    },
    methods: {
      toggleShow() {
        this.show = !this.show
      },
    },
  })
</script>
