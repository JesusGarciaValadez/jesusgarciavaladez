<template>
  <main
    class="bg-white rounded-lg md:rounded-t-none lg:rounded-t-none xl:rounded-t-none p-4 lg:px-32 lg:pb-20 lg:pt-10 mt-10 md:mt-0 lg:mt-0 xl:mt-0"
  >
    <div class="max-w-2xl m-auto" >
      <div
        class="font-sans font-light text-gray-800 text-base sm:text-lg md:text-lg lg:text-lg xl:text-lg leading-normal space-y-6">
        <div class="mb-10 flex flex-row items-center justify-center">
          <PhotoComponent class="h-24 w-24 sm:h-32 sm:w-32 md:h-48 md:w-48 lg:h-64 lg:w-64 rounded-full" />
        </div>

        <h2 class="text-2xl font-extrabold mb-4" role="heading">Who am I, and what I do?</h2>
        <p class="my-4">
          Hello!
          <a
            class="text-sky-700 underline"
            href="https://twitter.com/JesusGarciaV_"
            role="link"
            aria-label="Jesús García's Twitter account"
          >
            I’m Jesús García Valadez.
          </a>.
          Hello! I'm Jesús García Valadez, a seasoned <strong class="text-sky-700 font-bold">Full-Stack
          Engineer</strong>
          with over 15 years of web application development experience. While I excel in <strong
          class="text-sky-700 font-bold">back-end</strong> technologies, I'm also passionate about <strong
          class="text-sky-700 font-bold">front-end</strong> development, making me a versatile <strong
          class="text-sky-700 font-bold">full-stack developer</strong>.
        </p>
        <p class="my-4">
          My expertise spans a wide range of technologies, with particular proficiency in:
        </p>
        <ul>
          <li class="text-sky-700 font-bold">Backend: PHP, Laravel, Symfony, Node.js, Python</li>
          <li class="text-sky-700 font-bold">Front-end: HTML/CSS, JavaScript, Vue.js, React</li>
          <li class="text-sky-700 font-bold">Databases: MySQL, PostgreSQL, MongoDB</li>
          <li class="text-sky-700 font-bold">Cloud Services: AWS, GCP</li>
        </ul>
        <p class="my-4">
          My commitment to best practices in software development, including test-driven design, automated testing,
          clean code, and continuous integration/delivery, is unwavering. This dedication, combined with my analytical
          skills, allows me to transform requirements into efficient, scalable solutions, ensuring the highest quality
          of work.
        </p>
        <p class="my-4">
          Throughout my career, I've not only contributed to significant projects that have increased user bases,
          improved conversion rates, and reduced error rates for companies like
          <a
            class="text-sky-700 underline"
            href="https://www.bambelo.com/nl-nl/"
            hreflang="nl-NL"
            rel="nofollow"
            target="_blank"
            title="Bambelo, V.B."
          >
            Bambelo
          </a>,
          <a
            class="text-sky-700 underline"
            href="https://eupry.com/"
            hreflang="en-US"
            rel="nofollow"
            target="_blank"
            title="Eupry, ApS"
          >
            Eupry
          </a>,
          and
          <a
            class="text-sky-700 underline"
            href="https://linio.falabella.com/linio-cl/"
            hreflang="es-CL"
            rel="nofollow"
            target="_blank"
            title="Linio-Falabella"
          >
            Linio-Falabella
          </a>, but I've also played a key role in project management and
          mentoring.</p>
        <p class="my-4">
          My leadership has led teams and defined processes that have substantially increased company revenues,
          demonstrating my strong organizational and management skills.
        </p>
        <p class="my-4">
          As a lifelong learner, I continuously update my skills through courses and certifications, particularly in
          <strong
            class="text-sky-700 font-bold">Vue.js</strong> and <strong
          class="text-sky-700 font-bold">Laravel</strong>. I'm fluent in English and comfortable working in
          international environments.
        </p>
        <p class="my-4">
          Whether you're looking for a backend specialist, a front-end enthusiast, or a full-stack problem solver, I
          bring a wealth of experience and a passion for creating robust, user-friendly applications.
        </p>
        <p class="my-4">
          Curious about how I work? Check out my
          <nuxt-link
            class="text-sky-700 underline"
            aria-label="Uses"
            role="link"
            to="uses"
          >
            'uses'
          </nuxt-link>
          page for a complete list of all the software, gadgets, and services I employ in my development
          process. Explore my
          <nuxt-link
            class="text-sky-700 underline"
            to="/portfolio"
            role="link"
            aria-label="Portfolio"
          >
            portfolio
          </nuxt-link>
          and
          <nuxt-link
            class="text-sky-700 underline"
            to="/technologies"
            role="link"
            aria-label="Technologies"
          >
            technology
          </nuxt-link>
          pages for more details about my
          <nuxt-link
            class="text-sky-700 underline"
            aria-label="Experience"
            role="link"
            to="/experience"
          >
            experience
          </nuxt-link>
          and
          <nuxt-link
            class="text-sky-700 underline"
            aria-label="Community"
            role="link"
            to="/community"
          >
            community
          </nuxt-link>
          involvement.
        </p>
      </div>
    </div>
  </main>
</template>

<script lang="ts" setup>
</script>
