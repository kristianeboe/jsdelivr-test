/* eslint-disable @typescript-eslint/no-var-requires */

const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: {
    main: "./dist/src/main.js",
  },
  output: {
    path: path.join(__dirname, "build"),
    filename: "[name]-bundle.js",
  },
  plugins: [
    /**
     * All files inside webpack's output.path directory will be removed once, but the
     * directory itself will not be.
     */
    new CleanWebpackPlugin({
      cleanAfterEveryBuildPatterns: ["public/build"],
    }),
  ],
};
