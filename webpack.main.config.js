const path = require('path')

module.exports = {
  entry: './src/main.js',
  resolve: {
    alias: {
      'reduxConstants': path.resolve(__dirname, 'src/redux/constants'),
			'reduxActions': path.resolve(__dirname, 'src/redux/actions'),
    }
  },
  module: {
    rules: require('./webpack.rules'),
  },
};
