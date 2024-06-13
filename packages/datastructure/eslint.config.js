import ultifyEslintConfig from '@ultify/eslint-config'

export default [
  ...ultifyEslintConfig,
  {
    ignores: ['**/dist/'],
  }
]