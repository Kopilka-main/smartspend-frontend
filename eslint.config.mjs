// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'

export default withNuxt(eslintPluginPrettierRecommended, {
  rules: {
    // Активная разработка: `any` и забытые переменные допустимы как warning,
    // не блокируют CI. Разгребём по мере стабилизации модулей.
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_'
      }
    ],
    '@typescript-eslint/no-empty-object-type': 'warn',
    '@typescript-eslint/unified-signatures': 'warn',

    // Vue 3 поддерживает множественные корни в <template> (fragments) —
    // правило из Vue 2 больше не актуально.
    'vue/no-multiple-template-root': 'off'
  }
})
