<template>
  <main
    class="bg-white rounded-lg md:rounded-t-none lg:rounded-t-none xl:rounded-t-none p-4 lg:px-32 lg:pb-20 mt-10 md:mt-0 lg:mt-0 xl:mt-0"
  >
    <div class="max-w-full">
      <div
        class="font-sans font-light text-gray-800 text-base sm:text-lg md:text-lg lg:text-lg xl:text-lg leading-normal space-y-6">
        <div class="flex flex-shrink-0 flex-row items-center justify-center">
          <Briefcase />
        </div>
        <p class="my-4">You can find some of the most relevant works here:</p>
        <ul
          class="list-disc pl-5 w-full"
          role="list"
        >
          <WorkOnlineList
            v-for="(work, index) in worksOnline"
            :key="index"
            :work="work"
          />
        </ul>
        <h2 class="text-1xl font-extrabold mb-4" role="heading">Some clients for whose projects I worked before:</h2>
        <ul
          class="list-disc pl-5 w-full"
          role="list"
        >
          <WorkOfflineList
            v-for="(work, index) in worksOffline"
            :key="index"
            :work="work"
          />
        </ul>
      </div>
    </div>
  </main>
</template>

<script lang="ts" setup>
const worksOnline = [
  {
    url: 'http://149.28.220.35/',
    title: 'Calculator Laravel/VueJS',
    label: 'CalcuLaraVue',
    name: 'CalcuLaraVue',
  },
  {
    url: 'https://www.linio.com/',
    title: 'Linio©',
    label: 'Linio© (2018-2020)',
    name: 'Linio© (2018-2020)',
  },
  {
    url: 'https://www.legalario.com/',
    title: 'Legalario©',
    label: 'Legalario© (2018)',
    name: 'Legalario© (2018)',
  },
]

const worksOffline = [
  {
    url: 'https://rotoplas.com.mx/',
    title: 'Rotoplas© México',
    label: 'Rotoplas© Mexico (2008)',
    name: 'Rotoplas© Mexico (2008)',
  },
  {
    url: 'https://rotoplas.com/',
    title: 'Rotoplas© International',
    label: 'Rotoplas© International (2009)',
    name: 'Rotoplas© International (2009)',
  },
  {
    url: 'https://grupobimbo.com/es',
    title: 'Bimbo© Group',
    label: 'Bimbo© Group (2008)',
    name: 'Bimbo© Group (2008)',
  },
  {
    url: 'http://www.angloamericano.com.mx/',
    title: 'The Anglo©',
    label: 'The Anglo© (2009)',
    name: 'The Anglo© (2009)',
  },
  {
    url: 'http://www.altonivel.com.mx/',
    title: 'Alto Nivel© Magazine',
    label: 'Alto Nivel© Magazine (2010)',
    name: 'Alto Nivel© Magazine (2010)',
  },
  {
    url: 'https://www.mexicodesconocido.com.mx/',
    title: 'México Desconocido©',
    label: 'México Desconocido© (2010)',
    name: 'México Desconocido© (2010)',
  },
  {
    url: 'https://www.walmex.mx/',
    title: 'WalMart© México',
    label: 'Walmex© (2009)',
    name: 'Walmex© (2009)',
  },
]
</script>
