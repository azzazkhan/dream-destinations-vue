module.exports = {
  root: true,

  env: {
    node: true,
  },

  parserOptions: {
    parser: "babel-eslint",
  },

  rules: {
    "no-console": "off",
    "no-debugger": "off",
  },

  extends: [
    "plugin:vue/recommended",
    "plugin:vue/essential",
    "eslint:recommended",
    "@vue/prettier",
  ],
};
