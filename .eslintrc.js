module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/prettier',
    'eslint:recommended',
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended',
    'plugin:prettier/recommended',
    'plugin:@intlify/vue-i18n/recommended',
    'next/core-web-vitals',
  ],
  plugins: ['vitest'],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/no-multiple-template-root': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/no-v-html': 'off',
    '@typescript-eslint/consistent-type-imports': 'error',
  },
  settings: {
    'vue-i18n': {
      localeDir: './locales/*.{json}',
      messageSyntaxVersion: '^9.0.0',
    },
  },
  overrides: [
    {
      files: ['**/__tests__/*.{j,t}s?(x)', '**/tests/unit/**/*.spec.{j,t}s?(x)'],
      env: {
        jest: true,
      },
    },
  ],
  ignorePatterns: ['storyblok/types/generated.d.ts', 'storyblok/components/*.json', 'utils/usePhoneParserHelper/metadata.custom.json'],
};
