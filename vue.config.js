module.exports = {
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.md$/,
          exclude: /node_modules/,
          use: [
            {
              loader: "html-loader",
            },
            {
              loader: "markdown-loader",
            },
          ],
        },
      ],
    },
  },
};
