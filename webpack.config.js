const path = require('path');

module.exports = {
  entry: './code.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.bundle.js'
  },
  watch: true
};