const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
		vendor: ['babel-polyfill', 'react', 'react-dom', 'react-multiple-render', 'axios'],
		client: './src/app.js'
	},
  output: {
    path: path.resolve('dist'),
		filename: '[name].js'
  },
  module: {
    loaders: [
      { 
				test: /\.js$/, 
				loader: 'babel-loader?cacheDirectory=true', 
				exclude: /node_modules/ 
			},
    ]
  },
		plugins: [
      new webpack.optimize.CommonsChunkPlugin({ 
        name: 'vendor',
        filename: 'vendor.js', 
        minChunks: 2
      })
    ]
};
