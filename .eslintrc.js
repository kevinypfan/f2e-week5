module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/airbnb'
  ],
  rules: {
    'vue/no-parsing-error': [2, { "x-invalid-end-tag": false }],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'linebreak-style': ["error", "windows"],
    "comma-dangle": ["error", "never"],
    "max-len": ["error", { "code": 3000 }],
    "no-param-reassign": [2, { "props": false }]
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}