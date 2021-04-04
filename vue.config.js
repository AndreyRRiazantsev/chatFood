const path = require("path");

module.exports = {
  lintOnSave: false,
  css: {
    requireModuleExtension: true,
    loaderOptions: {
      sass: {
        sourceMap: true,
        prependData: `@import "~@/scss/styles.scss";`,
      },
    },
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.join(__dirname, './src'),
      }
    }
  }
};
