// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  // Your custom configs here
  {
    files: ['app/pages/**/*.vue'],
    rules: {
      'vue/no-multiple-template-root': 'off'
    }
  }
)
