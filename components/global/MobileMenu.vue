<template>
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
      v-if="this.$store.state.isOpen"
      class="border-b border-gray-700 md:hidden absolute inset-0 z-10 h-screen w-screen"
      style="background-color: #0f0e10"
    >
      <CloseButton />
      <div class="px-8 py-3 sm:px-8 h-full w-full">
        <ul
          class="m-0 p-0 flex flex-nowrap flex-col items-center justify-evenly h-full w-full"
        >
          <li class="list-none list-outside">
            <a
              href="#hello"
              :class="[
                currentHash === '#hello' || currentHash === ''
                  ? 'text-red-500 border-t-0 border-r-0 border-l-0 border-b-2 border-red-500'
                  : 'hover:text-red-300',
              ]"
              class="font-serif text-xl leading-8 not-italic font-normal text-center mr-5 text-white"
              @click="handleClick"
            >
              Hello
            </a>
          </li>
          <li class="list-none list-outside">
            <a
              href="#projects"
              :class="[
                currentHash === '#projects'
                  ? 'text-red-500 border-t-0 border-r-0 border-l-0 border-b-2 border-red-500'
                  : 'hover:text-red-300',
              ]"
              class="font-serif text-xl leading-8 not-italic font-normal text-center mr-5 text-white"
              @click="handleClick"
            >
              Projects
            </a>
          </li>
          <li class="list-none list-outside">
            <a
              href="#testimonies"
              :class="
                currentHash === '#testimonies'
                  ? 'text-red-500 border-t-0 border-r-0 border-l-0 border-b-2 border-red-500'
                  : 'hover:text-red-300'
              "
              class="font-serif text-xl leading-8 not-italic font-normal text-center mr-5 text-white"
              @click="handleClick"
            >
              Testimonies
            </a>
          </li>
          <li class="list-none list-outside">
            <a
              href="#contact"
              :class="
                currentHash === '#contact'
                  ? 'text-red-500 border-t-0 border-r-0 border-l-0 border-b-2 border-red-500'
                  : 'hover:text-red-300'
              "
              class="font-serif text-xl leading-8 not-italic font-normal text-center mr-5 text-white"
              @click="handleClick"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  </transition>
</template>

<script>
import CloseButton from '~/components/global/CloseButton.vue'

export default {
  name: 'MobileMenu',
  components: {
    CloseButton,
  },
  props: {
    currentHash: {
      type: String,
      required: true,
      default: '',
    },
  },
  methods: {
    handleClick() {
      this.$store.commit('toggleMenu')
    },
  },
}
</script>
