module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 7,
    parser: '@typescript-eslint/parser',
    ecmaFeatures: {
      jsx: true,
      modules: true,
    },
  },
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'prettier',
    'plugin:prettier/recommended',
  ],
  plugins: ['vue'],
  globals: {
    document: false,
    navigator: false,
    window: 'readonly',
    yw: 'readonly',
  },
  rules: {
    'no-console': 0, // 可以使用console
    'no-warning-comments': 0, // 允许注释里面有todo
    'vue/multi-word-component-names': 0, // 不限制组件名称
    'consistent-return': 0, // 允许没有返回值
    'symbol-description': 0, // 允许使用symbol-description
    'require-atomic-updates': 0,
    'max-statements': ['error', 100], // 函数最大行数
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        semi: false,
        htmlWhitespaceSensitivity: 'strict',
        trailingComma: 'all',
      },
    ],
  },
}
