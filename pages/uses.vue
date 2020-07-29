<template>
  <main
    class="bg-white rounded-lg md:rounded-t-none lg:rounded-t-none xl:rounded-t-none p-4 lg:px-32 lg:pb-20 mt-10 md:mt-0 lg:mt-0 xl:mt-0"
  >
    <div class="max-w-full">
      <div class="font-sans font-light text-cool-gray-600 text-base sm:text-lg md:text-lg lg:text-lg xl:text-lg leading-normal space-y-6">
        <div class="flex flex-shrink-0 flex-row items-center justify-center">
          <DesktopComputer />
        </div>
        <h2 class="text-xl font-bold" role="heading">Workstation</h2>
        <ul
          class="list-disc pl-5 w-full text-base sm:text-lg md:text-lg lg:text-lg xl:text-lg"
          role="list"
        >
          <li class="my-2 sm:my-0 md:my-0 lg:my-0 xl:my-0">
            MacBook Air (13-inch, 2017), 2.2 GHz Intel Core i3, 4 GB of RAM
          </li>
          <li class="my-2 sm:my-0 md:my-0 lg:my-0 xl:my-0">AirPods Pro</li>
          <li class="my-2 sm:my-0 md:my-0 lg:my-0 xl:my-0">
            iPad Pro 12.9" (2018)
          </li>
          <li class="my-2 sm:my-0 md:my-0 lg:my-0 xl:my-0">
            Apple Watch Series 4
          </li>
        </ul>
        <h2 class="text-xl font-bold" role="heading">Development</h2>
        <ul
          class="list-disc pl-5 w-full"
          role="list"
        >
          <li class="my-2 sm:my-0 md:my-0 lg:my-0 xl:my-0">
            <a
              class="text-cool-gray-500 underline"
              href="https://www.jetbrains.com/es-es/phpstorm/"
              title="PHPStorm"
              target="_blank"
            >
              PHPStorm</a
            >
          </li>
          <li class="my-2 sm:my-0 md:my-0 lg:my-0 xl:my-0">
            <a
              class="text-cool-gray-500 underline"
              href="https://github.com/tonsky/FiraCode"
              title="FiraCode"
              target="_blank"
              >FiraCode</a
            >
          </li>
          <li class="my-2 sm:my-0 md:my-0 lg:my-0 xl:my-0">
            <a
              class="text-cool-gray-500 underline"
              href="https://www.google.com/chrome/"
              title="Google Chrome"
              target="_blank"
              >Chrome</a
            >
          </li>
          <li class="my-2 sm:my-0 md:my-0 lg:my-0 xl:my-0">
            <a
              class="text-cool-gray-500 underline"
              href="https://chrome.google.com/webstore/detail/responsive-viewer/inmopeiepgfljkpkidclfgbgbmfcennb"
              title="Responsive Viewer Chrome Plugin"
              target="_blank"
            >
              Responsive Viewer Chrome plugin</a
            >
          </li>
          <li class="my-2 sm:my-0 md:my-0 lg:my-0 xl:my-0">
            <a
              class="text-cool-gray-500 underline"
              href="https://www.sequelpro.com/"
              title="Sequel Pro"
              target="_blank"
              >Sequel Pro</a
            >
          </li>
          <li class="my-2 sm:my-0 md:my-0 lg:my-0 xl:my-0">
            <a
              class="text-cool-gray-500 underline"
              href="https://www.iterm2.com/"
              title="iTerm2"
              target="_blank"
              >iTerm2</a
            >
          </li>
          <li class="my-2 sm:my-0 md:my-0 lg:my-0 xl:my-0">
            <a
              class="text-cool-gray-500 underline"
              href="https://github.com"
              title="Github"
              target="_blank"
              >Github</a
            >
          </li>
          <li class="my-2 sm:my-0 md:my-0 lg:my-0 xl:my-0">
            <a
              class="text-cool-gray-500 underline"
              href="https://www.git-tower.com/"
              title="Tower"
              target="_blank"
              >Tower</a
            >
          </li>
        </ul>
        <h2 class="text-xl font-bold" role="heading">Design</h2>
        <ul
          class="list-disc pl-5 w-full text-base sm:text-lg md:text-lg lg:text-lg xl:text-lg"
          role="list"
        >
          <li class="my-2 sm:my-0 md:my-0 lg:my-0 xl:my-0">
            <a
              class="text-cool-gray-500 underline"
              href="https://www.sketch.com/"
              title="Sketch App"
              target="_blank"
              >Sketch</a
            >
          </li>
          <li class="my-2 sm:my-0 md:my-0 lg:my-0 xl:my-0">
            <a
              class="text-cool-gray-500 underline"
              href="https://www.pixelmator.com/"
              title="Pixelmator"
              target="_blank"
              >Pixelmator</a
            >
          </li>
          <li class="my-2 sm:my-0 md:my-0 lg:my-0 xl:my-0">
            <a
              class="text-cool-gray-500 underline"
              href="https://codekitapp.com/"
              title="Codekit 2"
              target="_blank"
              >CodeKit 2</a
            >
          </li>
          <li class="my-2 sm:my-0 md:my-0 lg:my-0 xl:my-0">
            <a
              class="text-cool-gray-500 underline"
              href="https://sipapp.io/"
              title="Sip"
              target="_blank"
              >Sip</a
            >
          </li>
        </ul>
        <h2 class="text-xl font-bold" role="heading">Hosting</h2>
        <ul
          class="list-disc pl-5 w-full text-base sm:text-lg md:text-lg lg:text-lg xl:text-lg"
          role="list"
        >
          <li class="my-2 sm:my-0 md:my-0 lg:my-0 xl:my-0">
            <a
              class="text-cool-gray-500 underline"
              href="https://netlify.com/"
              title="Netlify"
              target="_blank"
              >Netlify</a
            >
          </li>
          <li class="my-2 sm:my-0 md:my-0 lg:my-0 xl:my-0">
            <a
              class="text-cool-gray-500 underline"
              href="https://forge.laravel.com/"
              title="Laravel Forge"
              target="_blank"
              >Laravel Forge</a
            >
          </li>
          <li class="my-2 sm:my-0 md:my-0 lg:my-0 xl:my-0">
            <a
              class="text-cool-gray-500 underline"
              href="https://m.do.co/c/e74d9cccce78"
              title="Digital Ocean"
              target="_blank"
              >Digital Ocean</a
            >
          </li>
          <li class="my-2 sm:my-0 md:my-0 lg:my-0 xl:my-0">
            <a
              class="text-cool-gray-500 underline"
              href="https://www.vultr.com/?ref=7224915"
              title="Vultr"
              target="_blank"
              >Vultr</a
            >
          </li>
          <li class="my-2 sm:my-0 md:my-0 lg:my-0 xl:my-0">
            <a
              class="text-cool-gray-500 underline"
              href="https://envoyer.io/"
              title="Envoyer"
              target="_blank"
              >Envoyer</a
            >
          </li>
          <li class="my-2 sm:my-0 md:my-0 lg:my-0 xl:my-0">
            <a
              class="text-cool-gray-500 underline"
              href="https://aws.amazon.com/"
              title="AWS"
              target="_blank"
              >AWS</a
            >
          </li>
        </ul>
        <h2 class="text-xl font-bold" role="heading">Productivity</h2>
        <ul
          class="list-disc pl-5 w-full text-base sm:text-lg md:text-lg lg:text-lg xl:text-lg"
          role="list"
        >
          <li class="my-2 sm:my-0 md:my-0 lg:my-0 xl:my-0">Apple Calendar</li>
          <li class="my-2 sm:my-0 md:my-0 lg:my-0 xl:my-0">Apple Mail</li>
          <li class="my-2 sm:my-0 md:my-0 lg:my-0 xl:my-0">
            <a
              class="text-cool-gray-500 underline"
              href="https://www.dropbox.com/"
              title="Dropbox"
              target="_blank"
              >Dropbox</a
            >
          </li>
          <li class="my-2 sm:my-0 md:my-0 lg:my-0 xl:my-0">
            <a
              class="text-cool-gray-500 underline"
              href="https://1password.com/"
              title="1Password"
              target="_blank"
              >1Password</a
            >
          </li>
          <li class="my-2 sm:my-0 md:my-0 lg:my-0 xl:my-0">
            <a
              class="text-cool-gray-500 underline"
              href="https://1.1.1.1/"
              title="1.1.1.1 + WARP"
              target="_blank"
              >1.1.1.1 + WARP</a
            >
          </li>
        </ul>
        <h2 class="text-xl font-bold" role="heading">Business</h2>
        <ul
          class="list-disc pl-5 w-full text-base sm:text-lg md:text-lg lg:text-lg xl:text-lg"
          role="list"
        >
          <li class="my-2 sm:my-0 md:my-0 lg:my-0 xl:my-0">
            <a
              class="text-cool-gray-500 underline"
              href="https://mailchimp.com/"
              title="Mailchimp"
              target="_blank"
              >Mailchimp</a
            >
          </li>
        </ul>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
  export default {
    loading: true,
    transition: 'test'
  }
</script>
