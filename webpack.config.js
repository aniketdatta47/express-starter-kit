var webpack = require('webpack');
var path    = require('path');

var APP_DIR   = path.resolve(__dirname, 'src/client/app');
var BUILD_DIR = path.resolve(__dirname, 'src/client/public');

var config = {
	entry: APP_DIR + '/js/main.js',
	output: {
		path: BUILD_DIR,
		filename: 'bundle.js'
	},
	plugins: [
		new webpack.DefinePlugin({
		  'process.env': {
		    'FLICKRAPIKEY': JSON.stringify(process.env.FLICKRAPIKEY)
		  }
		})
	],
	module: {
		loaders: [{
			test: /\.css?/,
			include: APP_DIR,
			loader: 'style!css'
		}]
	}
};

module.exports = config;
