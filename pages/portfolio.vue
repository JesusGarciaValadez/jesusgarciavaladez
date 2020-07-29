<template>
  <main
    class="bg-white rounded-lg md:rounded-t-none lg:rounded-t-none xl:rounded-t-none p-4 lg:px-32 lg:pb-20 mt-10 md:mt-0 lg:mt-0 xl:mt-0"
  >
    <div class="max-w-full">
      <div class="font-sans font-light text-cool-gray-600 text-base sm:text-lg md:text-lg lg:text-lg xl:text-lg leading-normal space-y-6">
        <div class="flex flex-shrink-0 flex-row items-center justify-center">
          <Briefcase />
        </div>
        <p class="my-4">You can find some of my works here:</p>
        <ul
          class="list-disc pl-5 w-full"
          role="list"
        >
          <WorkOnlineList
            v-for="(work, index) in worksOnline"
            :key="index"
            :work="work"
          ></WorkOnlineList>
        </ul>
        <h2 class="text-1xl font-extrabold mb-4" role="heading">Some clients for whose projects I worked:</h2>
        <ul
          class="list-disc pl-5 w-full"
          role="list"
        >
          <WorkOfflineList
            v-for="(work, index) in worksOffline"
            :key="index"
            :work="work"
          ></WorkOfflineList>
        </ul>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
  import Vue from "vue";

  export default Vue.extend({
    data() {
      return {
        worksOnline: [
          {
            url: 'https://www.linio.com/',
            title: 'Linio©',
            label: 'Linio© (2018-2020)',
            name: 'Linio© (2018-2020)',
          },
          {
            url: 'http://144.202.105.193/',
            title: 'Rolve Inmobiliaria© Development (2018)',
            label: 'Rolve Inmobiliaria©',
            name:
              'Rolve Inmobiliaria© Development (2018) (ask for credentials in order to test the project)',
          },
          {
            url: 'http://149.28.209.228/',
            title: 'Logikoss© Laravel Demo',
            label: 'Logikoss© Demo Project (2018)',
            name:
              'Logikoss© Demo Project (2018) (ask for credentials in order to test the project)',
          },
          {
            url: 'https://platzifood.netlify.app/',
            title: 'PlatziFood',
            label: 'PlatziFood Demo Project (2020)',
            name: 'PlatziFood Demo Project (2020)',
          },
          {
            url: 'http://104.207.150.215/',
            title: 'Filter of projects',
            label: 'Filter (2019)',
            name: 'Filter (2019)',
          },
          {
            url: 'https://www.legalario.com/',
            title: 'Legalario©',
            label: 'Legalario© (2018)',
            name: 'Legalario© (2018)',
          },
          {
            url: 'https://cupon-kidzania-mx.netlify.app/',
            title: 'Kidzania© Coupon',
            label: 'Kidzania© Code Redeemer Demo (2015)',
            name: 'Kidzania© Code Redeemer Demo (2015)',
          },
          {
            url: 'https://apps.apple.com/mx/app/atlasmx/id579811242',
            title: 'AtlasMX App',
            label: 'AtlasMX App (2012)',
            name: 'AtlasMX App (2012)',
          },
          {
            url: 'https://github.com/JesusGarciaValadez/TuTiendita',
            title: 'TuTiendita',
            label: 'TuTiendita (2019)',
            name: 'TuTiendita (2019)',
          },
          {
            url: 'https://github.com/JesusGarciaValadez/TuTienditaBackend',
            title: 'TuTiendita API',
            label: 'TuTiendita API (2019)',
            name: 'TuTiendita API (2019)',
          },
          {
            url: 'https://github.com/JesusGarciaValadez/local.frenchs.com',
            title: "French's© Mustards Mexico Laravel Repository",
            label: "French's© Mustards Mexico Repository",
            name: "French's© Mustards Mexico Repository (2016)",
          },
          {
            url: 'https://github.com/JesusGarciaValadez/defensa-medico-legal',
            title: 'Defensory legal and medical Repository',
            label: 'Defensory legal and medical Repository',
            name: 'Defensory legal and medical Repository',
          },
          {
            url: 'https://github.com/JesusGarciaValadez/local.iams.mars.com.mx',
            title: 'IAMS Mars© Repository',
            label: 'IAMS Mars© Repository',
            name: 'IAMS Mars© Repository',
          },
        ],
        worksOffline: [
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
            url: 'http://www.asur.com.mx/',
            title: 'ASUR© SouthEast Airports',
            label: 'ASUR© SouthEast Airports (2007-2008)',
            name: 'ASUR© SouthEast Airports (2007-2008)',
          },
          {
            url: 'https://grupobimbo.com/es',
            title: 'Bimbo© Group',
            label: 'Bimbo© Group (2008)',
            name: 'Bimbo© Group (2008)',
          },
          {
            url: 'https://axa.mx/',
            title: 'AXA© Seguros',
            label: 'AXA© Seguros | AXA© Insurances (2015)',
            name: 'AXA© Seguros | AXA© Insurances (2015)',
          },
          {
            url: 'https://giovannibojanini.es/',
            title: 'Giovanni Bojanini©',
            label: 'Giovanni Bojanini© Mexico & Argentina (2014)',
            name: 'Giovanni Bojanini© Mexico & Argentina (2014)',
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
            url: 'http://www.ingeniahosting.com/',
            title: 'Ingenia Hosting©',
            label: 'Ingenia Hosting© (2010)',
            name: 'Ingenia Hosting© (2010)',
          },
          {
            url: 'https://gsea.org/apply/',
            title: 'Global Student Entrepreneur Awards 2008 - 2009',
            label: 'Global Student Entrepreneur Awards (2009-2010)',
            name: 'Global Student Entrepreneur Awards (2009-2010)',
          },
          {
            url: 'https://www.saludymedicinas.com.mx/',
            title: 'Health & Medicines',
            label: 'Health & Medicines (2009)',
            name: 'Health & Medicines (2009)',
          },
          {
            url: 'https://www.vonwobeser.com/',
            title: 'Von Wobeser©',
            label: 'Von Wobeser© (2008)',
            name: 'Von Wobeser© (2008)',
          },
          {
            url: 'https://www.walmex.mx/',
            title: 'WalMart© México',
            label: 'Walmex© (2009)',
            name: 'Walmex© (2009)',
          },
        ],
      }
    },
    loading: true,
    transition: 'test'
  })
</script>
