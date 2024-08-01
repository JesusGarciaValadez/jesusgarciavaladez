import { defineNuxtConfig } from 'nuxt/config'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  env: {
    NUXT_SITE_ENV: process.env.NUXT_SITE_ENV,
    NUXT_PUBLIC_GTAG_ID: process.env.NUXT_PUBLIC_GTAG_ID
  },
  /*
   ** Enabling devtools in production
   ** See https://nuxt.com/modules/devtools
   */
  devtools: { enabled: process.env.NUXT_SITE_ENV !== 'production' },
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'universal',
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'static',
  /*
   ** Nuxt server configuration
   */
  app: {
    // https://nuxt.com/docs/getting-started/transitions
    pageTransition: { name: 'test' }
  },
  /*
   ** Nuxt SEO
   ** See https://nuxtseo.com/nuxt-seo/guides/configuring-modules
   */
  site: {
    url: 'https://jesusgarciavaladez.dev',
    name: 'Jesus Garcia Valadez | Portfolio',
    description: 'Welcome to my portfolio!',
    defaultLocale: 'en', // not needed if you have @nuxtjs/i18n installed
    indexable: process.env.NUXT_SITE_ENV === 'production',
    trailingSlash: true
  },
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', type: 'https://rsms.me/inter/inter.css' }
    ]
  },
  /**
   * Robots module configuration
   * See https://github.com/nuxt-community/robots-module#options
   */
  robots: {
    /**
     * Should a `<meta name="robots" content="<>">` tag be added to the head.
     *
     * @default boolean
     */
    metaTag: false,
    /**
     * Should route rules which disallow indexing be added to the `/robots.txt` file.
     *
     * @default boolean
     */
    disallowNonIndexableRoutes: true,
    /**
     * Specify a robots.txt path to merge the config from, relative to the root directory.
     *
     * When set to `true`, the default path of `<publicDir>/robots.txt` will be used.
     *
     * When set to `false`, no merging will occur.
     *
     * @default boolean | string
     */
    mergeWithRobotsTxtPath: false,
    /**
     * Blocks bots that don't benefit our SEO and are known to cause issues.
     *
     * @default boolean
     */
    blockNonSeoBots: true,
    disallow: ['/'],
    /**
     * Define more granular rules for the robots.txt. Each stack is a set of rules for specific user agent(s).
     *
     * @default []
     * @example [
     *    {
     *    userAgents: ['AdsBot-Google-Mobile', 'AdsBot-Google-Mobile-Apps'],
     *    disallow: ['/admin'],
     *    allow: ['/admin/login'],
     *    },
     *  ]
     */
    groups: [
      {
        userAgent: [
          // Google
          'AdsBot-Google-Mobile',
          'AdsBot-Google-Mobile-Apps',
          'AdsBot-Google',
          'Googlebot',
          'Googlebot-Image',
          'Googlebot-News',
          'Googlebot-Video',
          'Google-InspectionTool',
          'GoogleOther',
          'GoogleOther-Image',
          'GoogleOther-Video',
          'Google-Extended',
          'Storebot-Google',
          // DuckDuckGo
          'DuckDuckBot',
          // Bing
          'Bingbot',
          'msnbot',
          'adidxbot',
          // Meta
          'Metabot',
          'Facebot',
          'FacebookBot',
          'FacebookExternalHit',
          'WhatsApp',
          // Twitter
          'Twitterbot',
          // LinkedIn
          'LinkedInBot',
          // Pinterest
          'Pinterest',
          // Slack
          'Slackbot',
          // Apple
          'Applebot',
          // Telegram
          'TelegramBot',
          // Yahoo
          'Slurp',
          // Exabot (Francia)
          'Exabot',
          // Qwantify (Francia)
          'Qwantify',
          // AhrefsBot
          'AhrefsBot',
          // SEMrushBot
          'SEMrushBot',
          // MJ12bot
          'MJ12bot'
        ],
        disallow: ['/form']
      }
    ],
    credits: false,
  },
  /*
   ** Global CSS
   */
  css: ['~/assets/css/main.css'],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js modules
   */
  modules: [
    // https://nuxt.com/modules/i18n
    '@nuxtjs/i18n',
    // Doc: https://github.com/nuxt/content
    '@nuxt/content',
    // https://eslint.nuxt.com/packages/module
    '@nuxt/eslint',
    // https://pinia.vuejs.org/ssr/nuxt.html
    '@pinia/nuxt',
    // https://nuxt.com/modules/gtag
    'nuxt-gtag',
    // https://fonts.nuxt.com/get-started/installation
    '@nuxt/fonts',
    // https://nuxt.com/modules/purgecss
    'nuxt-purgecss',
    // https://nuxt.com/modules/headlessui
    'nuxt-headlessui',
    // https://nuxt.com/modules/storyblok
    '@storyblok/nuxt',
    // https://nuxt.com/modules/partytown
    '@nuxtjs/partytown',
    // https://nuxt.com/modules/tailwindcss
    '@nuxtjs/tailwindcss',
    // https://auto-animate.formkit.com/#usage-vue
    '@formkit/auto-animate/nuxt',
    // https://image.nuxt.com/get-started/installation
    '@nuxt/image',
    // https://nuxt.com/docs/getting-started/testing
    '@nuxt/test-utils/module',
    // https://color-mode.nuxtjs.org/
    '@nuxtjs/color-mode'
  ],
  /**
   ** Gtag configuration
   ** See https://nuxt.com/modules/gtag
   */
  gtag: {
    id: process.env.NUXT_PUBLIC_GTAG_ID,
    // Additional configuration for this tag ID
    config: {
      page_title: 'My Custom Page Title'
    }
  },
  /*
   ** Build configuration
   ** See https://storybook.nuxtjs.org/getting-started/setup
   */
  storybook: {
    // Options
    url: 'http://localhost:6006',
    port: 6006
  },
  /*
   ** PurgeCSS configuration
   ** See https://nuxt.com/modules/purgecss
   */
  purgecss: {
    enabled: true, // Always enable purgecss
    safelist: [] // Add my-class token to the safelist (e.g. .my-class)
  },
  /**
   ** Headless UI configuration
   ** See https://nuxt.com/modules/headlessui
   */
  headlessui: {
    prefix: 'Headless' // Optionally change the default prefix.
  },
  /**
   ** Storyblok configuration
   ** See https://nuxt.com/modules/storyblok
   */
  storyblok: {
    accessToken: "<your-access-token>",
    bridge: true,
    devtools: true
  },
  /**
   ** Partytown configuration
   ** See https://nuxt.com/modules/partytown
   */
  partytown: {
    /**
     * When `true`, Partytown scripts are not minified. See https://partytown.builder.io/configuration
     * on how to enable more logging.
     *
     * @default true in development
     */
    debug: process.env.NUXT_SITE_ENV === 'development',
    /**
     * Path (relative to your base URL) where the Partytown library should be served from.
     *
     * @default '~partytown'
     */
    lib: '~partytown'
    // For other options, see https://partytown.builder.io/configuration
  },
  /**
   ** i18n configuration
   ** See https://i18n.nuxtjs.org/docs/guide
   */
  i18n: {
    baseUrl: 'https://jesusgarciavaladez.dev',
    strategy: 'prefix_except_default',
    lazy: true,
    langDir: 'lang',
    defaultLocale: 'en',
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        file: 'en-US.ts'
      },
      {
        code: 'es',
        iso: 'es-ES',
        file: 'es-ES.ts'
      }
    ]
  },
  /**
   ** ESLint configuration
   ** See https://nuxt.com/modules/eslint-module
   */
  eslint: {
    cache: true,
    include: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.vue',
      'nuxt.config.js',
      '/**/*.{js,jsx,ts,tsx,vue}'
    ],
    emitWarning: true,
    emitError: true,
    failOnWarning: false,
    failOnError: false,
    checker: true
  },
  /**
   ** Nuxt Image configuration
   ** See https://image.nuxt.com/get-started/installation
   */
  image: {
    dir: 'assets/images'
  },
  /**
   ** Nuxt Test Utils configuration
   ** See https://nuxt.com/docs/getting-started/testing
   */
  test: {
    environment: 'nuxt'
  },
  /**
   ** Nuxt Color Mode configuration
   ** See https://color-mode.nuxtjs.org/
   */
  colorMode: {
    preference: 'system', // default value of $colorMode.preference
    fallback: 'light', // fallback value if not system preference found
    hid: 'nuxt-color-mode-script',
    globalName: '__NUXT_COLOR_MODE__',
    componentName: 'ColorScheme',
    classPrefix: '',
    classSuffix: '-mode',
    storageKey: 'nuxt-color-mode'
  },
  /*
   ** Content module configuration
   ** See https://content.nuxt.com/get-started/configuration
   */
  content: {
    // Will fetch navigation, page and surround.
    navigation: true,
    page: true,
    surround: true,
    // Will fetch `content/_theme.yml` and put it in `globals.theme` if present.
    globals: {
      theme: {
        where: {
          _id: 'content:_theme.yml'
        },
        without: ['_']
      }
    },
    // Will use `theme` global to search for a fallback `layout` key.
    layoutFallbacks: ['theme'],
    // Will inject `[...slug].vue` as the root page.
    injectPage: true
  },
  router: {
    linkActiveClass: '',
    linkExactActiveClass: ''
  }
})
