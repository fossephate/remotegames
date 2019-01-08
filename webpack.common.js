// webpack.common.js
const path = require("path");
module.exports = {
	entry: {
		index: "./src/index.js",
	},
	output: {
		// `filename` provides a template for naming your bundles (remember to use `[name]`)
		filename: "[name].bundle.js",
		// `chunkFilename` provides a template for naming code-split bundles (optional)
		chunkFilename: "[name].bundle.js",
		// `path` is the folder where Webpack will place your bundles
		path: __dirname + "/public/dist",
		// `publicPath` is where Webpack will load your bundles from (optional)
		publicPath: "dist/",
	},
	// optimization: {
	// 	splitChunks: {
	// 		chunks: "all"
	// 	}
	// },
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
