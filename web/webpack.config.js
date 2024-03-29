const path = require('path');

module.exports = {
  entry: './web/src/script.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'App'
  },
};