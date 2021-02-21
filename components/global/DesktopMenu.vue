<template>
  <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
    <div>
      <div class="flex items-center justify-between h-24 px-4 sm:px-0">
        <div class="flex items-center">
          <HamburguerButton />
          <Logo />
          <div class="hidden md:block">
            <ul class="ml-10 flex items-baseline">
              <li>
                <a
                  href="#hello"
                  :class="
                    currentHash === '#hello' || currentHash === ''
                      ? 'text-red-500 border-t-0 border-r-0 border-l-0 border-b-2 border-red-500'
                      : 'hover:text-red-300'
                  "
                  class="font-serif text-xl leading-8 not-italic font-normal text-center mr-5 text-white"
                >
                  Hello
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  :class="
                    currentHash === '#projects'
                      ? 'text-red-500 border-t-0 border-r-0 border-l-0 border-b-2 border-red-500'
                      : 'hover:text-red-300'
                  "
                  class="font-serif text-xl leading-8 not-italic font-normal text-center mx-5 text-white"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#testimonies"
                  :class="
                    currentHash === '#testimonies'
                      ? 'text-red-500 border-t-0 border-r-0 border-l-0 border-b-2 border-red-500'
                      : 'hover:text-red-300'
                  "
                  class="font-serif text-xl leading-8 not-italic font-normal text-center mx-5 text-white"
                >
                  Testimonies
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  :class="
                    currentHash === '#contact'
                      ? 'text-red-500 border-t-0 border-r-0 border-l-0 border-b-2 border-red-500'
                      : 'hover:text-red-300'
                  "
                  class="font-serif text-xl leading-8 not-italic font-normal text-center mx-5 text-white"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <DownloadCVButton />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DownloadCVButton from '~/components/global/DownloadCVButton.vue'
import Logo from '~/components/global/Logo.vue'
import HamburguerButton from '~/components/global/HamburguerButton.vue'

export default {
  name: 'DesktopMenu',
  components: {
    DownloadCVButton,
    HamburguerButton,
    Logo,
  },
  props: {
    currentHash: {
      type: String,
      required: true,
      default: '',
    },
  },
}
</script>
