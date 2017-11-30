module.exports = {
  extends: ['google', 'plugin:react/recommended'],
  parserOptions: {
    ecmaVersion: 8,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true
    }
  },
  rules: {
    'no-tabs': 'off',
    'require-jsdoc': 'off',
    'max-len': [
      'error',
      {
        ignoreStrings: true,
        code: 120,
        tabWidth: 4
      }
    ],
    indent: [2, 2, { SwitchCase: 1 }]
  }
};
