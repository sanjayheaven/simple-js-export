const path = require("path")

module.exports = {
  entry: "./src/simple-js-export.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "simple-js-export.js",
    library: {
      name: "SimpleJsExport",
      type: "umd",
      export: "default",
      auxiliaryComment: "SimpleJsExport",
    },
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
      },
    ],
  },
  performance: {
    hints: false,
  },
}
