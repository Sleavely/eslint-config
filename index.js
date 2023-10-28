module.exports = {
  extends: ['standard'],
  plugins: ['@sleavely/js-rules'],

  rules: {
    'comma-dangle': ['error', 'always-multiline'],
    'import/no-cycle': ['error', { maxDepth: 2 }],
    '@sleavely/js-rules/destructure-env': ['error', 'always'],
    '@sleavely/js-rules/uppercase-env': ['error', 'always'],
  },

  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: ['standard-with-typescript'],
      plugins: ['@sleavely/ts-rules'],

      rules: {
        '@typescript-eslint/comma-dangle': ['error', 'always-multiline'],
        '@typescript-eslint/no-explicit-any': ['error'],
        '@typescript-eslint/strict-boolean-expressions': 'off',
        '@sleavely/ts-rules/prefer-inferred-const': ['error', 'always'],
      },
    },
  ],
}
