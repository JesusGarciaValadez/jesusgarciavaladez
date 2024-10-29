<template>
  <SimpleLayout
    title="Things I’ve made trying to put my dent in the universe."
    intro="I’ve worked on tons of little projects over the years but these are the ones that I’m most proud of. Many of them are open-source, so if you see something that piques your interest, check out the code and contribute if you have ideas for how it can be improved."
  >
    <ul
      role="list"
      class="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
    >
      <ProjectCard v-for="project in projects" :key="project.name" :project="project" />
    </ul>
  </SimpleLayout>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useHead } from '@vueuse/head'
import SimpleLayout from '~/layouts/SimpleLayout.vue'
import ProjectCard from '~/components/ProjectCard.vue'
import { getProjects } from '~/plugins/projects.ts'

const projects = ref([])

onMounted(async () => {
  projects.value = await getProjects()
})

useHead({
  title: 'Projects',
  meta: [
    {
      name: 'description',
      content: 'Things I’ve made trying to put my dent in the universe.',
    },
  ],
})
</script>
