<template>
  <main
    class="bg-white rounded-lg md:rounded-t-none lg:rounded-t-none xl:rounded-t-none p-4
  lg:px-32 lg:pb-20 lg:pt-10 lg:pb-20 mt-10 md:mt-0 lg:mt-0 xl:mt-0"
  >
    <div class="max-w-2xl m-auto">
      <h1 class="text-2xl font-extrabold text-gray-900 mb-4" role="heading">
        Who am I and what I do?
      </h1>
      <div class="text-lg text-gray-900 leading-normal space-y-6">
        <p class="my-4" role="">
          Hi!
          <a
            class="text-blue-700 font-bold underline"
            href="https://twitter.com/JesusGarciaV_"
            role="link"
            aria-label="Jesús García's Twitter account"
          >
            This is Jesús García Valadez</a
          >, I’m a full-stack developer who loves front-end, working with
          <strong class="text-blue-700 font-bold">Laravel</strong> and
          <strong
            class="text-blue-700
          font-bold"
            >Vue</strong
          >.
        </p>
        <p class="my-4">
          You can know all about me and my work about software development through my
          <router-link class="text-blue-700 font-bold underline" to="/jobs" role="link" aria-label="Jobs"
            >jobs,
          </router-link>
          <router-link class="text-blue-700 font-bold underline" to="/works" role="link" aria-label="Works"
            >works,
          </router-link>
          <router-link class="text-blue-700 font-bold underline" to="/tech" role="link" aria-label="Technologies"
            >technologies,
          </router-link>
          <router-link
            class="text-blue-700 font-bold underline"
            to="/education"
            role="link"
            aria-label="Community & Education"
            >community & education.</router-link
          >
          links
        </p>
        <p class="my-4">
          In 2017, I also started to do some works as a freelance and left my job to make things full-time.
        </p>
        <p class="my-4">
          Curious about how I work? Check out my
          <router-link class="text-blue-700 font-bold underline" to="uses" role="link" aria-label="Uses"
            >uses</router-link
          >
          page for a full list of all the software, gadgets, and services I use.
        </p>
      </div>
    </div>
  </main>
</template>

<script lang="js">
export default {
  name: 'Home'
};
</script>
