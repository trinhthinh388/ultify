import ultifyEslintConfig from '@ultify/eslint-config/next.js';

export default [
  ...ultifyEslintConfig,
  {
    ignores: ['**/dist/', '**/.next/', '*.js', '**/*.mdx'],
  },
];
