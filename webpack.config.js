var path = require('path');
var webpack = require('webpack');
module.exports = {
    entry: './app.js',
    output: {
        path: path.resolve(__dirname, 'build/js'),
        filename: 'easygraphics.js',
        library: 'easygraphics',
        libraryTarget: 'umd',
        umdNamedDefine: true,
    },
    module: {
        loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'eslint-loader',
				enforce: 'pre'
			},
			{
                test: /\.js$/,
				query: {
                    presets: ['es2015']
                },
                loader: 'babel-loader',
		        exclude: /node_modules/,
            }
        ]
    },
    stats: {
        colors: true
    },
    devtool: 'source-map'
 };