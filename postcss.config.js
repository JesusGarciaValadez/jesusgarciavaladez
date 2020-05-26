/* eslint global-require: "error" */
const purgecss = require('@fullhuman/postcss-purgecss')({
  content: [
    './**/*.html',
    './**/**/*.vue',
  ],
  defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
});

module.exports = {
  plugins: [
    require('postcss-import'),
    require('tailwindcss'),
    require('autoprefixer'),
    ...(process.env.NODE_ENV === 'production' ? [purgecss] : []),
    require('cssnano')({
      preset: 'default',
    }),
  ],
};
