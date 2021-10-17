module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
    'node': true
  },
  // extends用于扩展一些规则
  'extends': 'eslint:recommended',
  // 用于指定想要支持的JavaScript语言选项
  'parserOptions': {
    'ecmaVersion': 2020,
    'sourceType': 'module'
  },
  'rules': {
    'no-unused-vars': 'off',
    'comma-dangle': ['error', 'never'],
    'quotes': ['error', 'single'],
    'semi': ['error', 'never'],
    'no-multiple-empty-lines': ['error', {
      'max': 1,
      'maxEOF': 0
    }],
    'camelcase': 'error',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'eqeqeq': 'error',
    'space-before-blocks': 'error',
    'indent': ['error', 2]
  }
}
