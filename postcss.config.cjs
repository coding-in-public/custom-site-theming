// postcss config with autoprefixer, preset-env, cssnano, and postcss-import

module.exports = {
  plugins: [
    require("autoprefixer"),
    require("postcss-preset-env", {
      stage: 1,
    }),
    require("cssnano")({
      preset: "default",
    }),
  ],
};
