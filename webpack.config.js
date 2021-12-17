const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  mode: 'development',
  entry: './frontend/app.js',
  output: {
    path: path.join(__dirname, 'backend/public'),
    filename: 'bundle.js'
  },
  plugins: [
    new htmlWebpackPlugin({
      template: './frontend/index.html',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true
      }
    })
  ]
};
