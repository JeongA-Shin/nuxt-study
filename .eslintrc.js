module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
<<<<<<< HEAD
  parser: 'babel-eslint'
  },
extends: [
  '@nuxtjs',
  'plugin:prettier/recommended'
],
  plugins: [
  'prettier'
],
  // add your custom rules here
  rules: {}
=======
  parser: '@babel/eslint-parser',
  requireConfigFile: false
},
extends: [
  '@nuxtjs',
  'plugin:nuxt/recommended'
],
  plugins: [
],
  // add your custom rules here
  rules: {
  'vue/multi-word-component-names': ['error', {
    ignores: ['default', 'index']
  }]
}

