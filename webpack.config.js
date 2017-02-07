var webpack = require("webpack");
var path = require("path");
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
	entry: ["./example.js"],
	output: {
        filename: 'bundle.js',
        publicPath: '/dist/',
        path: path.resolve(__dirname, 'dist')
    },

	plugins: [
		new webpack.LoaderOptionsPlugin({
			options: {
				worker: {
					output: {
						filename: "hash.worker.js",
						chunkFilename: "[id].hash.worker.js"
					}
				}
			}
		}),
		new CopyWebpackPlugin([
			{
				from: "b.js"
			},
			// Comment this 
			{
				from: "a.worker.js"
			}
			//
		])
	]
};