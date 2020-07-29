<template>
  <main
    class="bg-white rounded-lg md:rounded-t-none lg:rounded-t-none xl:rounded-t-none p-4 lg:px-32 lg:pb-20 lg:pt-10 lg:pb-20 mt-10 md:mt-0 lg:mt-0 xl:mt-0"
  >
    <div class="max-w-2xl m-auto" >
      <div class="font-sans font-light text-cool-gray-600 text-base sm:text-lg md:text-lg lg:text-lg xl:text-lg leading-normal space-y-6">
        <div class="mb-10 flex flex-row items-center justify-center">
          <Photo className="h-24 w-24 sm:h-32 sm:w-32 md:h-48 md:w-48 lg:h-64 lg:w-64 rounded-full" />
        </div>

        <h2 class="text-2xl font-extrabold mb-4" role="heading">Who am I, and what I do?</h2>
        <p class="my-4">
          Hi!
          <a
            class="text-cool-gray-500 underline"
            href="https://twitter.com/JesusGarciaV_"
            role="link"
            aria-label="Jesús García's Twitter account"
          >
            This is Jesús García Valadez</a
          >, I’m a full-stack developer who loves front-end, working with
          <strong class="text-cool-gray-500 font-bold">Laravel</strong> and
          <strong class="text-cool-gray-500 font-bold">Vue</strong>.
        </p>
        <p class="my-4">
          You can know all <nuxt-link
          class="text-cool-gray-500 underline"
          to="/experience"
          role="link"
          aria-label="Experience"
        >about my experience</nuxt-link> and my work about software development through my
          <nuxt-link
            class="text-cool-gray-500 underline"
            to="/portfolio"
            role="link"
            aria-label="Portfolio"
            >porfolio,
          </nuxt-link>
          <nuxt-link
            class="text-cool-gray-500 underline"
            to="/technologies"
            role="link"
            aria-label="Technologies"
            >technologies,
          </nuxt-link>
          <nuxt-link
            class="text-cool-gray-500 underline"
            to="/community"
            role="link"
            aria-label="Community"
            >community.</nuxt-link
          >
          links
        </p>
        <p class="my-4">
          In 2017, I also started to do some works as a freelance and left my
          job to make things full-time.
        </p>
        <p class="my-4">
          Curious about how I work? Check out my
          <nuxt-link
            class="text-cool-gray-500 underline"
            to="uses"
            role="link"
            aria-label="Uses"
            >uses</nuxt-link
          >
          page for a full list of all the software, gadgets, and services I use.
        </p>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({
    loading: true,
    transition: 'test'
  })
</script>
