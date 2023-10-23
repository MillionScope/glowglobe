const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  unstable_flexsearch: true,
  unstable_staticImage: true,
  plugins: [
    'tailwindcss',
    'postcss-flexbugs-fixes',
    'postcss-preset-env',
    [
      'postcss-normalize',
      {
        allowDuplicates: false,
      },
    ],
    [
      '@fullhuman/postcss-purgecss',
      {
        content: ['./pages/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
        defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
      },
    ],
    'autoprefixer',
  ],
})

module.exports = withNextra()
