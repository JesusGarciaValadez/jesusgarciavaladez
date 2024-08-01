import { defineNuxtConfig } from 'nuxt/config'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/i18n',
    '@nuxt/devtools',
    '@nuxt/image',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
    '@nuxt/eslint',
    '@nuxt/content',
    'nuxt-gtag',
    'nuxt-svgo',
    '@nuxtjs/storybook',
    '@nuxt/fonts',
    '@nuxtjs/seo',
    'nuxt-headlessui',
    '@storyblok/nuxt',
    '@nuxtjs/tailwindcss',
  ],
})
