// webpack.common.js
const path = require("path");
module.exports = {
	entry: "./src/index.js",
	output: {
		filename: "bundle.js",
		path: __dirname + "/public/dist",
	},
	module: {
		rules: [{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				loader: "babel-loader",
			},
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"],
			}
		],
	},
	// 	modules: [path.resolve(__dirname, "app"), "node_modules"],
	resolve: {
		alias: {
			js: path.resolve(__dirname, "public/js/"),
			src: path.resolve(__dirname, "src/"),
		},
	},
	node: {
		fs: "empty",
	}
};