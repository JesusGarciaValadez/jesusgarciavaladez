<template>
  <main class="flex flex-row justify-between align-center bg-gray-900 py-20 px-18">
    <div class="mr-10 flex-start flex-shink">
      <HeroTitle>
        <template #default>Hello everyone! <br />I'm Jesús García</template>
      </HeroTitle>
      <HeroSubtitle>
        <template #default>
          Software engineer that loves to make websites that inspire and attract
          people.
        </template>
      </HeroSubtitle>
      <TopToBottomArrow />
    </div>
    <HeroPhoto class="flex flex-end flex-grow-0 w-120" />
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
