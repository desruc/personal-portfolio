module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  extends: [
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint'
  ],
  plugins: ['@typescript-eslint', 'prettier', 'react-hooks'],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    browser: true,
    jest: true,
    node: true
  },
  globals: {
    cy: true,
    Cypress: true
  },
  rules: {
    '@typescript-eslint/no-unused-vars': [
      1,
      {
        argsIgnorePattern: 'res|next|stage|^err|on|config|e'
      }
    ],
    'arrow-body-style': [2, 'as-needed'],
    'no-param-reassign': [
      2,
      {
        props: false
      }
    ],
    'no-unused-expressions': [
      1,
      {
        allowTaggedTemplates: true
      }
    ],
    '@typescript-eslint/prefer-interface': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/no-use-before-define': 0,
    '@typescript-eslint/camelcase': 0,
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-non-null-assertion': 0,
    'no-console': 0,
    'spaced-comment': 0,
    'no-use-before-define': 0,
    'linebreak-style': 0,
    'consistent-return': 0,
    import: 0,
    'func-names': 0,
    'import/no-extraneous-dependencies': 0,
    'import/prefer-default-export': 0,
    'import/no-cycle': 0,
    'space-before-function-paren': 0,
    'import/extensions': 0,
    'react/jsx-one-expression-per-line': 0,
    'react/no-danger': 0,
    'react/display-name': 1,
    'react/react-in-jsx-scope': 0,
    'react/jsx-uses-react': 1,
    'react/forbid-prop-types': 0,
    'react/no-unescaped-entities': 0,
    'react/prop-types': 0,
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx', '.tsx']
      }
    ],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    quotes: [
      2,
      'single',
      {
        avoidEscape: true
      }
    ],
    indent: ['error', 2, { SwitchCase: 1 }],
    'prettier/prettier': [
      'error',
      {
        trailingComma: 'none',
        semi: true,
        singleQuote: true,
        printWidth: 80,
        endOfLine: 'auto'
      }
    ],
    'jsx-a11y/href-no-hash': 'off',
    'jsx-a11y/anchor-is-valid': [
      'warn',
      {
        aspects: ['invalidHref']
      }
    ],
    'react/jsx-props-no-spreading': 0
  }
};
