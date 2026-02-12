import nodePlugin from "eslint-plugin-node";
import jestPlugin from "eslint-plugin-jest";

export default [
  {
    plugins: {
      node: nodePlugin,
      jest: jestPlugin,
    },
    rules: {
      // custom rules here
    },
    languageOptions: {
      env: {
        node: true,
        jest: true,
      },
    },
  },
];
