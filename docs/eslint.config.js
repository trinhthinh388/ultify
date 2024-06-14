import ultifyEslintConfig from '@ultify/eslint-config/next'

export default [
  ...ultifyEslintConfig,
  {
    ignores: ['**/dist/'],
  }
]