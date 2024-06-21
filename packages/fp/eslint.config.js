import ultifyEslintConfig from '@ultify/eslint-config';

export default [
  ...ultifyEslintConfig,
  {
    ignores: ['**/dist/'],
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
];
