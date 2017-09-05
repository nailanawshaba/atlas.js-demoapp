'use strict'

module.exports = {
  parser: 'babel-eslint',

  extends: [
    '@strv/javascript/environments/nodejs/v8-3',
    '@strv/javascript/environments/nodejs/optional',
    '@strv/javascript/coding-styles/recommended',
  ],

  rules: {
    // If your editor cannot show these to you, occasionally turn this off and run the linter
    'no-warning-comments': 0,
  },

  overrides: [{
    files: [
      'test/**',
      'packages/*/test/**/*.test.es',
    ],

    globals: {
      sinon: true,
      expect: true,
    },
  }, {
    files: [
      'src/http/controllers/**',
    ],

    rules: {
      'import/no-anonymous-default-export': ['warn', {
        allowObject: true
      }],
    },
  }],
}
