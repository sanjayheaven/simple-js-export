const path = require("path")

module.exports = {
  entry: "./src/simple-js-export.js",
  output: {
    globalObject: "this",
    path: path.resolve(__dirname, "dist"),
    filename: "simple-js-export.js",
    library: {
      name: "SimpleJsExport",
      type: "umd",
      export: "default",
      auxiliaryComment: "SimpleJsExport",
    },
  },
  externals: { fs: "fs" },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
      },
    ],
  },
  performance: { hints: false },
}
