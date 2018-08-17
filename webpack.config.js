const path = require('path');

module.exports = {
  entry: [
    './node_modules/prefix-data/jquery.prefixData.js',
    './assets/jquery.ajaxContent.js',
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'jquery.ajaxContent.min.js',
  },
  devtool: 'source-map'
};
