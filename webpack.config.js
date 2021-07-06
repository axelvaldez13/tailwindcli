const path = require("path");
module.exports = (env, argv) => {
  return {
    mode: argv.mode,
    context: path.resolve(__dirname, "src"),
    entry: {
      app: "./App.js",
    },
    output: {
      path: path.resolve(__dirname, "output/js"),
      filename: "App.js",
    },
    devServer: {
      contentBase: "./output",
      publicPath: "/sample",
    },
    module: {
      rules: [
        {
          test: /\.json$/,
          use: {
            loader: "json-loader",
          },
        },
      ],
    },
  };
};
