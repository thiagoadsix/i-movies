module.exports = {
  extends: 'standard-with-typescript',
  parserOptions: {
    project: './tsconfig.json'
  },
  rules: {
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/method-signature-style': 'off',
    '@typescript-eslint/no-misused-promises': 'off',
    'node/no-path-concat': 'off',
    '@typescript-eslint/restrict-template-expressions': 'off'
  }
}
