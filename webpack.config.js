var webpack = require('webpack');

module.exports = {
  entry: './src/app/boot.ts',
  output: {
    filename: 'bundle.js'
  },
  resolve: {
    modulesDirectories: ['node_modules'],
    root: './src',
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.js'],
  },
  module: {
    loaders: [
      { test: /\.tsx?$/, loader: 'ts-loader' }
    ]
  }
};
