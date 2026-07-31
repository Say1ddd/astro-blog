import antfu from '@antfu/eslint-config'

export default antfu({
  formatters: true,
  unocss: true,
  vue: {
    a11y: true,
  },
  astro: true,

  rules: {
    'pnpm/yaml-enforce-settings': 'off',
  },
})
