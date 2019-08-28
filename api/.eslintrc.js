module.exports = {
  root: true,
  env: {
    node: true,
  },
  plugins: ['graphql'],
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'import/extensions': ['error', 'always', {
      js: 'never',
      vue: 'never',
    }],
    'import/prefer-default-export': 'off',
    'max-len': ['warn', 250],
    'no-bitwise': ["error", { "allow": ["~"] }],
    'no-extra-boolean-cast': "off",
  },
  parserOptions: {
    parser: 'babel-eslint',
  },

};
