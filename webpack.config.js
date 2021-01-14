const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const package = require("./package.json");

module.exports = {
  devtool: "inline-source-map",
  entry: {
    background: "./src/background/index.ts",
    popup: "./src/popup/index.tsx",
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist/scripts"),
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [{ test: /\.tsx?$/, loader: "ts-loader" }],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./static/popup.html",
      filename: "../popup.html",
      chunks: ["popup"],
      minify: false,
    }),
    new CopyWebpackPlugin({
      patterns: [{ from: "./static/manifest.json", to: "./../manifest.json" }],
      patterns: [{ from: "./static/icon.png", to: "./../icon.png" }],
    }),
  ],
};
