<template>
  <main class="bg-white rounded-lg md:rounded-t-none lg:rounded-t-none xl:rounded-t-none p-4
  lg:px-32 lg:pb-20 mt-10 md:mt-0 lg:mt-0 xl:mt-0">
    <div class="max-w-full">
      <h1 class="text-2xl font-extrabold text-gray-900 mb-4" role="heading">
        Community & Education</h1>
      <div class="text-lg text-gray-900 leading-normal space-y-6">
        <p class="my-4">You can see my spaces in social networks:</p>
        <ul class="list-disc pl-5 w-full text-sm sm:text-lg md:text-lg lg:text-lg xl:text-lg"
            role="list">
          <li class="my-2 sm:my-0 md:my-0 lg:my-0 xl:my-0 font-light">
            <a class="text-blue-700 font-bold underline"
               href="https://github.com/JesusGarciaValadez" title="Github" target="_blank"
               role="link" aria-label="Github Profile Page">Github</a>
          </li>
          <li class="my-2 sm:my-0 md:my-0 lg:my-0 xl:my-0 font-light">
            <a class="text-blue-700 font-bold underline"
               href="https://www.twitter.com/@JesusGarciaV_" title="Twitter" target="_blank"
               role="link" aria-label="JesusGarciaV_ Twitter Account">Twitter</a>
          </li>
          <li class="my-2 sm:my-0 md:my-0 lg:my-0 xl:my-0 font-light">
            <a class="text-blue-700 font-bold underline"
               href="https://www.facebook.com/JesusAGarciaValadez/" title="Facebook"
               target="_blank" role="link" aria-label="JesusGarciaValadez Facebook Page">
              Facebook</a>
          </li>
          <li class="my-2 sm:my-0 md:my-0 lg:my-0 xl:my-0 font-light">
            <a class="text-blue-700 font-bold underline"
               href="https://www.codepen.io/JesusGarciaValadez" title="CodePen" target="_blank"
               role="link" aria-label="JesusGarciaValadez CodePen profile">CodePen</a>
          </li>
          <li class="my-2 sm:my-0 md:my-0 lg:my-0 xl:my-0 font-light">
            <a class="text-blue-700 font-bold underline"
               href="https://platzi.com/@JesusGarciaValadez/" title="Platzi" target="_blank"
               role="link" aria-label="JesusGarciaValadez Platzi Profile">Platzi</a>
          </li>
          <li class="my-2 sm:my-0 md:my-0 lg:my-0 xl:my-0 font-light">
            <a class="text-blue-700 font-bold underline"
               href="https://styde.net/perfil/_chucho_/"
               title="Styde: A Laravel Community in Spanish" target="_blank" role="link"
               aria-label="JesusGarciaValadez Styde Profile">Styde</a>
          </li>
          <li class="my-2 sm:my-0 md:my-0 lg:my-0 xl:my-0 font-light">
            <a class="text-blue-700 font-bold underline"
               href="https://www.linkedin.com/in/jesusgarciav/" title="LinkedIn" target="_blank"
               role="link" aria-label="JesusGarciaValadez LinkedIn Profile">LinkedIn</a>
          </li>
        </ul>
        <p class="my-4">Want to contact me? Gimme a shout out:</p>
        <form class="block" name="contact-form" method="POST" data-netlify="true"
              data-netlify-honeypot="bot-field" role="form">
          <input type="hidden" name="form-name" value="contact-form" />
          <p class="block my-4">
            <input class="block rounded px-4 py-2 border-gray-400 border-current border-2 w-full
            placeholder-gray-500 focus:outline-none" type="text" name="name" id="name"
                   placeholder="Name" role="textbox" aria-placeholder="name"
                   required aria-labelledby="name" aria-required="true" />
          </p>
          <p class="block my-4">
            <input class="block rounded px-4 py-2 border-gray-400 border-current border-2 w-full
            placeholder-gray-500 focus:outline-none" type="email" name="email" id="email"
                   placeholder="email" role="textbox" aria-placeholder="email"
                   required aria-labelledby="email" aria-required="true" />
          </p>
          <p class="block my-4">
            <textarea class="block rounded px-4 py-2 border-gray-400 border-current border-2 h-64
            w-full placeholder-gray-500 focus:outline-none" name="message" id="message"
                      placeholder="message" role="textbox" aria-placeholder="message"
                      required aria-describedby="messsage" aria-required="true"></textarea>
          </p>
          <p class="block my-4">
            <button class="px-4 py-2 bg-blue-700 text-gray-100 rounded-lg shadow-lg" type="submit"
                    role="button" aria-describedby="submit" aria-label="send message">Send</button>
          </p>
        </form>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'CommunityEducation',
});
</script>
