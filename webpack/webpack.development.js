const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const { merge } = require('webpack-merge');

const path = require('path');

const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    static: path.resolve(__dirname, '../public'),
    port: 3000,
    hot: true,
    open: true,
    historyApiFallback: true,
    client: {
      logging: 'none',
    },
  },
  plugins: [new ForkTsCheckerWebpackPlugin()],
});
