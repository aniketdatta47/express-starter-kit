var webpack = require('webpack');
var path    = require('path');
var LiveReloadPlugin = require('webpack-livereload-plugin');

var APP_DIR   = path.resolve(__dirname, 'src/client/public');
var BUILD_DIR = path.resolve(__dirname, 'src/client/prod');

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
		}),
		new LiveReloadPlugin()
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
