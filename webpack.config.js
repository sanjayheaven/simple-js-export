const path = require("path")

module.exports = {
  entry: "./src/simple-js-export.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "simple-js-export.js",
    libraryTarget: "umd",
  },
}
