import { defineVitestConfig } from '@nuxt/test-utils/config'
import { fileURLToPath } from 'node:url'

export default defineVitestConfig({
  test: {
    environment: 'nuxt', // - 'nuxt', 'happy-dom' (default) or 'jsdom'
    // you can optionally set Nuxt-specific environment options
    environmentOptions: {
      nuxt: {
        rootDir: fileURLToPath(new URL('.', import.meta.url)),
        domEnvironment: 'happy-dom', // 'happy-dom' (default) or 'jsdom'
        // overrides: {
        // other Nuxt config you want to pass
        // }
        mock: {
          intersectionObserver: true,
          indexedDb: true,
        },
      },
    },
  },
})
