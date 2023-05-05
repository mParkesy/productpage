const path = require('path');

module.exports = {
  entry: [
    './resources/js/index.js',
    '/resources/scss/style.scss'
  ],
  output: {
    filename: 'product.min.js',
    path: path.resolve(__dirname, 'assets'),
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          {
              loader: 'file-loader',
              options: { outputPath: 'css/', name: '[name].min.css'}
          },
          'sass-loader'
        ]
      },
    ],
  },
  watch: true,
};