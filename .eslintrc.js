module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    jest: true,
  },
  extends: ["airbnb-base", "prettier"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
  },
  "no-param-reassign": [
    "error",
    {
      props: true,
      ignorePropertyModificationsFor: ["acc"],
    },
  ],

  rules: {
    "prettier/prettier": "error",
  },
  plugins: ["prettier"],
};
