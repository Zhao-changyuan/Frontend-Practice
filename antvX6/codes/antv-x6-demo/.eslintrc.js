module.exports = {
  root: true,
  env: {
    node: true,
  },
  globals: {
    defineProps: true,
    defineEmits: true,
    defineExpose: true,
  },
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-unused-vars': 1,
    'comma-dangle': ['error', 'always-multiline'],
  },
}
