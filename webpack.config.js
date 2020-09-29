const path = require("path");
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')

module.exports = {
  mode: "development",
  entry: "./code.ts",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".json"],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.bundle.js",
  },
  watch: true,
  plugins: [
    new BrowserSyncPlugin({
      // browse to http://localhost:3000/ during development,
      // ./public directory is being served
      host: 'localhost',
      port: 3000,
      server: { baseDir: ['../todo_21'] }
    })
  ]
};
