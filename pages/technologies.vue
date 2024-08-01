<template>
  <main
    class="bg-white rounded-lg md:rounded-t-none lg:rounded-t-none xl:rounded-t-none p-4 lg:px-32 lg:pb-20 mt-10 md:mt-0 lg:mt-0 xl:mt-0"
  >
    <div class="max-w-full">
      <div
        class="font-sans font-light text-gray-800 text-base sm:text-lg md:text-lg lg:text-lg xl:text-lg leading-normal space-y-6">
        <div class="flex flex-shrink-0 flex-row items-center justify-center">
          <Code />
        </div>
        <p class="my-4">I do some stuff with the following technologies:</p>
        <h2 class="text-1xl font-extrabold mb-4" role="heading">Front-end</h2>
        <ul
          class="list-disc pl-5 w-full"
          role="list"
        >
          <TechnologyList
            v-for="(tech, index) in frontendTechs"
            :key="index"
            :technology="tech"
          />
        </ul>
        <h2 class="text-1xl font-extrabold mb-4" role="heading">Back-end</h2>
        <ul
          class="list-disc pl-5 w-full"
          role="list"
        >
          <TechnologyList
            v-for="(tech, index) in backendTechs"
            :key="index"
            :technology="tech"
          />
        </ul>
        <h2 class="text-1xl font-extrabold mb-4" role="heading">DevOps</h2>
        <ul
          class="list-disc pl-5 w-full"
          role="list"
        >
          <TechnologyList
            v-for="(tech, index) in devopsTechs"
            :key="index"
            :technology="tech"
          />
        </ul>
        <h2 class="text-1xl font-extrabold mb-4" role="heading">Marketing</h2>
        <ul
          class="list-disc pl-5 w-full"
          role="list"
        >
          <TechnologyList
            v-for="(tech, index) in marketingTechs"
            :key="index"
            :technology="tech"
          />
        </ul>
        <p class="my-4">
          I work a lot in my soft skills as to how to make a hiring process, how to give feedback, how to help
          coworkers without being invasive, how to manage my time, etc.
        </p>
        <p class="my-4">
          I can add that if I don’t know some technology, I can learn it fast.
        </p>
      </div>
    </div>
  </main>
</template>

<script lang="ts" setup>
const frontendTechs = [
  { name: 'SASS' },
  { name: 'LESS' },
  { name: 'Stylus' },
  { name: 'PostCSS' },
  { name: 'Materialize' },
  { name: 'Boostrap 3' },
  { name: 'Bulma CSS' },
  { name: 'React' },
  { name: 'Vue' },
  { name: 'Nuxt' },
  { name: 'jQuery' },
  { name: 'ECMAScript' },
  { name: 'Accessibility' },
  { name: 'PWA' },
  { name: 'Web Workers' },
]
const backendTechs = [
  { name: 'Typescript' },
  { name: 'Node' },
  { name: 'Express' },
  { name: 'PHP' },
  { name: 'Laravel' },
]
const devopsTechs = [
  { name: 'Linux' },
  { name: 'MySQL' },
  { name: 'Firebase' },
  { name: 'MongoDB' },
  { name: 'Postgres' },
  { name: 'Docker' },
]
const marketingTechs = [
  { name: 'SEO' },
  { name: 'SEM' },
  { name: 'Email Marketing Campaigns' },
  { name: 'Google Ads Campaigns' },
  { name: 'Facebook Ads Campaigns' },
  { name: 'Twitter Ads Campaigns' },
]
</script>
