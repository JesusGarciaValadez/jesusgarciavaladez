<template>
  <main
    class="bg-white rounded-lg md:rounded-t-none lg:rounded-t-none xl:rounded-t-none p-4 lg:px-32 lg:pb-20 mt-10 md:mt-0 lg:mt-0 xl:mt-0"
  >
    <div class="max-w-full">
      <div
        class="font-sans font-light text-gray-800 text-base sm:text-lg md:text-lg lg:text-lg xl:text-lg leading-normal space-y-6">
        <div class="flex flex-shrink-0 flex-row items-center justify-center">
          <ExternalLink />
        </div>
        <p class="my-4">You can find me in:</p>
        <ul
          class="list-disc pl-5 w-full"
          role="list"
        >
          <li
            v-for="(network, index) in networks"
            :key="index"
            class="my-2 sm:my-0 md:my-0 lg:my-0 xl:my-0 font-light"
          >
            <a
              class="text-sky-700 underline"
              :href="network.networkUrl"
              :title="network.networkTitle"
              target="_blank"
              role="link"
              :aria-label="network.networkLabel"
            >
              {{ network.networkName }}</a
            >
          </li>
        </ul>
        <p class="my-4">Want to contact me? Give me a shout:</p>
        <form
          action="/thank-you"
          class="block"
          name="contact-form"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          role="form"
        >
          <input type="hidden" name="form-name" value="contact-form">
          <p class="block my-4">
            <input
              id="name"
              class="block rounded px-4 py-2 border-gray-400 border-current border-2 w-full placeholder-gray-500 focus:outline-none"
              type="text"
              name="name"
              placeholder="Name"
              role="textbox"
              aria-placeholder="name"
              required
              aria-labelledby="name"
              aria-required="true"
            >
          </p>
          <p class="block my-4">
            <input
              id="email"
              class="block rounded px-4 py-2 border-gray-400 border-current border-2 w-full placeholder-gray-500 focus:outline-none"
              type="email"
              name="email"
              placeholder="email"
              role="textbox"
              aria-placeholder="email"
              required
              aria-labelledby="email"
              aria-required="true"
            >
          </p>
          <p class="block my-4">
            <textarea
              id="message"
              class="block rounded px-4 py-2 border-gray-400 border-current border-2 h-64 w-full placeholder-gray-500 focus:outline-none"
              name="message"
              placeholder="message"
              role="textbox"
              aria-placeholder="message"
              required
              aria-describedby="messsage"
              aria-required="true"
            />
          </p>
          <p class="block my-4">
            <button
              class="px-4 py-2 bg-blue-700 text-gray-100 rounded-lg shadow-lg"
              type="submit"
              role="button"
              aria-describedby="submit"
              aria-label="send message"
            >
              Send
            </button>
          </p>
        </form>
      </div>
    </div>
  </main>
</template>

<script lang="ts" setup>
const networks = [
  {
    networkUrl: 'https://github.com/JesusGarciaValadez',
    networkTitle: 'Github',
    networkLabel: 'Github Profile Page',
    networkName: 'Github',
  },
  {
    networkUrl: 'https://www.twitter.com/@JesusGarciaV_',
    networkTitle: 'Twitter',
    networkLabel: 'JesusGarciaV_ Twitter Account',
    networkName: 'Twitter',
  },
  {
    networkUrl: 'https://www.facebook.com/JesusAGarciaValadez/',
    networkTitle: 'Facebook',
    networkLabel: 'JesusGarciaValadez Facebook Page',
    networkName: 'Facebook',
  },
  {
    networkUrl: 'https://www.codepen.io/JesusGarciaValadez',
    networkTitle: 'CodePen',
    networkLabel: 'JesusGarciaValadez CodePen profile',
    networkName: 'CodePen',
  },
  {
    networkUrl: 'https://platzi.com/@JesusGarciaValadez/',
    networkTitle: 'Platzi',
    networkLabel: 'JesusGarciaValadez Platzi Profile',
    networkName: 'Platzi',
  },
  {
    networkUrl: 'https://styde.net/perfil/_chucho_/',
    networkTitle: 'Styde: A Laravel Community in Spanish',
    networkLabel: 'JesusGarciaValadez Styde Profile',
    networkName: 'Styde.net',
  },
  {
    networkUrl: 'https://www.linkedin.com/in/jesusgarciavaladez/',
    networkTitle: 'LinkedIn',
    networkLabel: 'JesusGarciaValadez LinkedIn Profile',
    networkName: 'LinkedIn',
  },
]
</script>
