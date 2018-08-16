const path = require('path');

module.exports = {
  entry: [
    './assets/jquery.ajaxContent.js',
    './assets/jquery.prefixData.js',
    './assets/jquery.getAttributes.js',
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'jquery.ajaxContent.min.js',
  },
  devtool: 'source-map'
};
