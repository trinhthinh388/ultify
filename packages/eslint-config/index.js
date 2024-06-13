import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintConfigPrettier from 'eslint-config-prettier';
import tsParser from '@typescript-eslint/parser';

export default tseslint.config(
  eslintConfigPrettier,
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    languageOptions: {
      parserOptions: {
        parser: tsParser,
        project: ['./packages/*/tsconfig.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
  }
);
// export default {
//   env: {
//     node: true,
//   },
//   parser: "@typescript-eslint/parser",
//   plugins: ["@typescript-eslint"],
//   parserOptions: {
//     sourceType: "module",
//     ecmaVersion: 2020,
//   },
//   rules: {
//     "@typescript-eslint/no-non-null-assertion": "off",
//   },
// };
