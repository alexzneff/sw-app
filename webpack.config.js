var path = require('path');

module.exports = {
  entry: './app/index.js',
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    compress: true,
    port: 8080
  }
};