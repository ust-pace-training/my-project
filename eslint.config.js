// eslint.config.js
export default [
  {
    languageOptions: {
      env: {
        node: true,
        es2021: true,
        jest: true, // for test globals like "test" and "expect"
      },
    },
    rules: {
      "no-unused-vars": "warn",
      "no-console": "off",
    },
  },
];
