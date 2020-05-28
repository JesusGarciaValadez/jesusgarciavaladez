<template>
  <main
    class="bg-white rounded-lg md:rounded-t-none lg:rounded-t-none xl:rounded-t-none p-4
  lg:px-32 lg:pb-20 mt-10 md:mt-0 lg:mt-0 xl:mt-0"
  >
    <div class="max-w-full">
      <h1 class="text-2xl font-extrabold text-gray-900 mb-4" role="heading">Technologies</h1>
      <div class="text-lg text-gray-900 leading-normal space-y-6">
        <p class="my-4">
          I learn and do some stuff with the next technologies:
        </p>
        <h2 class="text-1xl font-extrabold text-gray-900 mb-4" role="heading">Front-end</h2>
        <ul class="list-disc pl-5 w-full text-sm sm:text-lg md:text-lg lg:text-lg xl:text-lg" role="list">
          <TechnologyList v-for="(tech, index) in frontendTechs" :key="index" :technology="tech"></TechnologyList>
        </ul>
        <h2 class="text-1xl font-extrabold text-gray-900 mb-4" role="heading">Back-end</h2>
        <ul class="list-disc pl-5 w-full text-sm sm:text-lg md:text-lg lg:text-lg xl:text-lg" role="list">
          <TechnologyList v-for="(tech, index) in backendTechs" :key="index" :technology="tech"></TechnologyList>
        </ul>
        <h2 class="text-1xl font-extrabold text-gray-900 mb-4" role="heading">DevOps</h2>
        <ul class="list-disc pl-5 w-full text-sm sm:text-lg md:text-lg lg:text-lg xl:text-lg" role="list">
          <TechnologyList v-for="(tech, index) in devopsTechs" :key="index" :technology="tech"></TechnologyList>
        </ul>
        <h2 class="text-1xl font-extrabold text-gray-900 mb-4" role="heading">Marketing</h2>
        <ul class="list-disc pl-5 w-full text-sm sm:text-lg md:text-lg lg:text-lg xl:text-lg" role="list">
          <TechnologyList v-for="(tech, index) in marketingTechs" :key="index" :technology="tech"></TechnologyList>
        </ul>
        <p class="my-4">
          I have a subscriptions in some learning sites as:
          <strong class="text-blue-700 font-bold">Platzi</strong>,
          <strong class="text-blue-700 font-bold">Styde (Laravel community)</strong>,
          <strong class="text-blue-700 font-bold">Laracasts</strong>,
          <strong class="text-blue-700 font-bold">Udemy</strong>. I love to learn, you know. Also I attend a couple of
          <strong class="text-blue-700 font-blue">Google</strong>
          tech presentations and demos.
        </p>
        <p class="my-4">
          Also, I work a lot in my soft skills as to how to make a hiring process, how to give feedback, how to help
          another’s, how to manage my time, etc. Also, I’m working very hard to have a better performance in my English
          level (my mother tongue is Spanish). I’m still learning English at an advanced level.
        </p>
        <p class="my-4">
          I can add that if I don’t know some technology, I can learn it really fast.
        </p>
      </div>
    </div>
  </main>
</template>

<script lang="js">
import TechnologyList from '@/components/TechnologyList.vue';

export default {
  name: 'Technologies',
  components: {
    TechnologyList
  },
  data() {
    return {
      frontendTechs: [
        { name: 'SASS' },
        { name: 'LESS' },
        { name: 'Stylus' },
        { name: 'PostCSS' },
        { name: 'Materialize' },
        { name: 'Boostrap 3' },
        { name: 'Bulma CSS' },
        { name: 'React' },
        { name: 'Vue' },
        { name: 'jQuery' },
        { name: 'ECMAScript' },
        { name: 'Accessibility' },
        { name: 'PWA' },
        { name: 'Web Workers' }
      ],
      backendTechs: [{ name: 'Typescript' }, { name: 'Node' }, { name: 'Express' }],
      devopsTechs: [
        { name: 'Linux' },
        { name: 'MySQL' },
        { name: 'Firebase' },
        { name: 'MongoDB' },
        { name: 'Postgres' },
        { name: 'Docker' }
      ],
      marketingTechs: [
        { name: 'SEO' },
        { name: 'SEM' },
        { name: 'Email Marketing Campaigns' },
        { name: 'Google Ads Campaigns' },
        { name: 'Facebook Ads Campaigns' },
        { name: 'Twitter Ads Campaigns' }
      ]
    };
  },
};
</script>
