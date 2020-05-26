const purgecss = require('@fullhuman/postcss-purgecss')({
  content: [
    './**/*.html',
    './**/**/*.vue',
  ],
  defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
});

module.exports = ({ options }) => ({
  plugins: {
    'postcss-import': {},
    tailwindcss: {},
    autoprefixer: {},
    ...(process.env.NODE_ENV === 'production' ? [purgecss] : []),
    cssnano: options.dev ? false : {
      preset: ['default', {
        discardComments: { removeAll: true },
      }],
    },
  },
});
