<template>
  <div class="pb-32" style="background-color: #0f0e10">
    <nav>
      <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div>
          <div class="flex items-center justify-between h-24 px-4 sm:px-0">
            <div class="flex items-center">
              <div class="md:hidden h-6 w-6">
                <!-- Mobile menu button -->
                <button
                  class="h-full w-full box-border p-0 inline-flex items-center justify-center rounded-md text-red-500 hover:text-red-500 focus:outline-none focus:text-red-700"
                  @click="isOn = !isOn"
                >
                  <transition
                    name="hamburguer"
                    enter-active-class="transition ease-out duration-100 transform-gpu"
                    enter-class="opacity-0 scale-95"
                    enter-to-class="opacity-100 scale-100"
                    leave-active-class="transition ease-in duration-75 transform-gpu"
                    leave-class="opacity-100 scale-100"
                    leave-to-class="opacity-0 scale-95"
                  >
                    <!-- Menu open: "hidden", Menu closed: "block" -->
                    <svg
                      v-if="!isOn"
                      class="h-full w-full"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  </transition>
                </button>
              </div>
              <div class="flex-shrink-0">
                <Logo class-name="h-10 w-10 rounded-full" />
              </div>
              <div class="hidden md:block">
                <div class="ml-10 flex items-baseline">
                  <a
                    href="#hello"
                    :class="
                      isHello
                        ? 'text-red-500 border-t-0 border-r-0 border-l-0 border-b-2 border-red-500'
                        : 'hover:text-red-300'
                    "
                    class="font-serif text-xl leading-8 not-italic font-normal text-center mr-5 text-white"
                  >
                    Hello
                  </a>
                  <a
                    href="#projects"
                    :class="
                      isProjects
                        ? 'text-red-500 border-t-0 border-r-0 border-l-0 border-b-2 border-red-500'
                        : 'hover:text-red-300'
                    "
                    class="font-serif text-xl leading-8 not-italic font-normal text-center mx-5 text-white"
                  >
                    Projects
                  </a>
                  <a
                    href="#testimonies"
                    :class="
                      isTestimonies
                        ? 'text-red-500 border-t-0 border-r-0 border-l-0 border-b-2 border-red-500'
                        : 'hover:text-red-300'
                    "
                    class="font-serif text-xl leading-8 not-italic font-normal text-center mx-5 text-white"
                  >
                    Testimonies
                  </a>
                  <a
                    href="#contact"
                    :class="
                      isContact
                        ? 'text-red-500 border-t-0 border-r-0 border-l-0 border-b-2 border-red-500'
                        : 'hover:text-red-300'
                    "
                    class="font-serif text-xl leading-8 not-italic font-normal text-center mx-5 text-white"
                  >
                    Contact
                  </a>
                </div>
              </div>
              <a
                href=""
                target="_blank"
                class="ml-5 px-6 py-3 bg-yellow-500 font-sans text-base leading-4 not-italic font-normal text-center text-white"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>

      <!--
        Mobile menu, toggle classes based on menu state.

        Open: "block", closed: "hidden"
      -->
      <transition
        name="menu"
        enter-active-class="transition ease-out duration-100 transform-gpu"
        enter-class="opacity-0 scale-95"
        enter-to-class="opacity-100 scale-100"
        leave-active-class="transition ease-in duration-75 transform-gpu"
        leave-class="opacity-100 scale-100"
        leave-to-class="opacity-0 scale-95"
      >
        <div
          v-if="isOn"
          class="border-b border-gray-700 md:hidden absolute inset-0 z-10 h-screen w-screen"
          style="background-color: #0f0e10"
        >
          <div class="md:hidden h-6 w-6 absolute top-9 left-4">
            <!-- Mobile menu button -->
            <button
              class="h-full w-full box-border p-0 inline-flex items-center justify-center rounded-md text-red-500 hover:text-red-500 focus:outline-none focus:text-red-700"
              @click="isOn = !isOn"
            >
              <transition
                name="hamburguer"
                enter-active-class="transition ease-out duration-100 transform-gpu"
                enter-class="opacity-0 scale-95"
                enter-to-class="opacity-100 scale-100"
                leave-active-class="transition ease-in duration-75 transform-gpu"
                leave-class="opacity-100 scale-100"
                leave-to-class="opacity-0 scale-95"
              >
                <!-- Menu open: "block", Menu closed: "hidden" -->
                <svg
                  v-if="isOn"
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
          <div
            class="px-8 py-3 sm:px-8 flex flex-nowrap flex-col items-center justify-evenly h-full w-full"
          >
            <a
              href="#hello"
              :class="
                isHello
                  ? 'text-red-500 border-t-0 border-r-0 border-l-0 border-b-2 border-red-500'
                  : 'hover:text-red-300'
              "
              class="font-serif text-xl leading-8 not-italic font-normal text-center mr-5 text-white"
              @click="isOn = !isOn"
            >
              Hello
            </a>
            <a
              href="#projects"
              :class="
                isProjects
                  ? 'text-red-500 border-t-0 border-r-0 border-l-0 border-b-2 border-red-500'
                  : 'hover:text-red-300'
              "
              class="font-serif text-xl leading-8 not-italic font-normal text-center mr-5 text-white"
              @click="isOn = !isOn"
            >
              Projects
            </a>
            <a
              href="#testimonies"
              :class="
                isTestimonies
                  ? 'text-red-500 border-t-0 border-r-0 border-l-0 border-b-2 border-red-500'
                  : 'hover:text-red-300'
              "
              class="font-serif text-xl leading-8 not-italic font-normal text-center mr-5 text-white"
              @click="isOn = !isOn"
            >
              Testimonies
            </a>
            <a
              href="#contact"
              :class="
                isContact
                  ? 'text-red-500 border-t-0 border-r-0 border-l-0 border-b-2 border-red-500'
                  : 'hover:text-red-300'
              "
              class="font-serif text-xl leading-8 not-italic font-normal text-center mr-5 text-white"
              @click="isOn = !isOn"
            >
              Contact
            </a>
          </div>
        </div>
      </transition>
    </nav>
    <header class="py-10">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1
          class="text-2xl md:text-3xl leading-9 font-bold font-sans text-white"
        >
          Jesús García |
          {{
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
  filters: {
    capitalize(value: string) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    },
  },
  data() {
    return {
      isOn: false,
    }
  },
  computed: {
    isHello() {
      return this.$route.hash === '#hello' || this.$route.hash === ''
    },
    isProjects() {
      return this.$route.hash === '#projects'
    },
    isTestimonies() {
      return this.$route.hash === '#testimonies'
    },
    isContact() {
      return this.$route.hash === '#contact'
    },
  },
})
</script>
