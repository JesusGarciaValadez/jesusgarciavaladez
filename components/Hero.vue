<template>
  <main
    class="flex flex-row justify-between align-center bg-gray-900 md:py-20 lg:py-20 md:px-18 lg:px-18"
  >
    <div
      class="container flex flex-wrap md:flex-nowrap lg:flex-nowrap flex-col-reverse md:flex-col lg:flex-col px-5 py-5 md:p-0 lg:p-0"
    >
      <div
        class="mt-5 md:m-0 md:mr-10 lg:m-0 lg:mr-10 flex-end md:flex-start lg:flex-start flex-shrink md:flex-shrink-0 lg:flex-shrink-0"
      >
        <HeroTitle
          class="mb-5 md:m-0 lg:m-0 font-sans text-4xl md:text-6xl lg:text-6xl leading-10 md:leading-20 lg:leading-20 text-white"
        >
          <template #default>Hello everyone! <br />I'm Jesús García</template>
        </HeroTitle>
        <HeroSubtitle
          class="font-serif text-xl md:text-2xl lg:text-2xl leading-8 md:leading-10 lg:leading-10 text-gray-400"
        >
          <template #default>
            Software engineer that loves to make websites that inspire and
            attract people.
          </template>
        </HeroSubtitle>
        <TopToBottomArrow class="mt-10" />
      </div>
      <HeroPhoto
        class="flex-start md:flex-end lg:flex-end flex-shrink md:flex-grow-0 lg:flex-grow-0 w-full md:w-120 lg:w-120"
      />
    </div>
  </main>
</template>

<script lang="ts">
import HeroTitle from './hero/HeroTitle.vue'
import HeroSubtitle from './hero/HeroSubtitle.vue'
import TopToBottomArrow from './global/icons/TopToBottomArrow.vue'
import HeroPhoto from './hero/HeroPhoto.vue'

export default {
  name: 'Hero',
  components: {
    HeroTitle,
    HeroSubtitle,
    TopToBottomArrow,
    HeroPhoto,
  },
}
</script>
