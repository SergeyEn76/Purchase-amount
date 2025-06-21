module.exports = {
    'env': {
      'browser': true,
      'es2001': true,
      'jest': true
    },
    'extends': [
      'standart',
      'eslint:recommended'
    ],
    'overrides': [
      {
        'files': [
          "**/*.test.ts"
        ],
        'plugins': ['jest'],
        'extends': ['plugin:jest/recommended'],
        'rules': { 'jest/prefer-expect-assertions': 'on' }
      },
        {
          "env": {
            "node": true,
            "jest": true,
          },
          "files": [
            ".eslintrc.{ts,js,cjs}"
          ],
            "parserOptions": {
              "sourceType": "script"
            }
        }
    ],
    'parserOptions': {
      "ecmaFeatures": {
        "jsx": true
      },
      'ecmaVersion': 14,
      'sourceType': 'module'
    },
    'rules': {
      'imprt/extentions': [
        'error',
        'ignorePackages'
      ],
      'no-restricted-syntax': [
        'error',
        'LabeledStatement',
        'WithStatement'
      ]
    }
}