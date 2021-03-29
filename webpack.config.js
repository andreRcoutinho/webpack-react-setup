/* https://webpack.js.org/configuration/ */

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

const path = require('path');

module.exports = {
  target: 'web',
  devtool: 'cheap-module-source-map',
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    port: 9000,
    stats: 'minimal',
    overlay: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.(png|jpe?g|svg|gif)$/,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Minimal Webpack Config',
      filename: 'index.html',
      template: './public/index.html',
    }),
    new ESLintPlugin(),
  ],
};
