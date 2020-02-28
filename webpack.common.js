"use strict";
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const HOST = process.env.HOST || "127.0.0.1";
const PORT = process.env.PORT || "7777";

module.exports = {
	entry: {
		index: `${__dirname}/src/index.js`,
	},
	output: {
		path: `${__dirname}/dist`,
		publicPath: '/',
		filename: '[name].bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['env'],
					}
				}
			},
			
			{
				test: /\.html$/,
				exclude: /node_modules/,
				use: {loader: 'html-loader'}
			},
		]
	},
	devServer: {
		contentBase: "./dist",
		// enable HMR
		hot: true,
		// embed the webpack-dev-server runtime into the bundle
		inline: true,
		port: PORT,
		host: HOST
	},
	plugins: [
    new webpack.DefinePlugin({
      ENVS_LIST: JSON.stringify(process.env),
    }),
		new UglifyJSPlugin({
			compress: true
		}),
	  new HtmlWebpackPlugin({
	    template: 'src/template.html'
    }),
	]
}
