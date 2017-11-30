module.exports = {
  extends: ['google', 'plugin:react/recommended'],
  parser: 'babel-eslint',
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
    'react/prop-types': 'off', // temporary
    'no-invalid-this': 1,
    'max-len': [
      'error',
      {
        ignoreStrings: true,
        code: 120,
        tabWidth: 4
      }
    ],
    indent: [2, 2, { SwitchCase: 1 }]
  },
  plugins: ['babel']
};
