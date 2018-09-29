// webpack.config.js
module.exports = {
	mode: "development",
	entry: "./public/js/main2.js",
	output: {
		filename: "bundle.js",
// 		publicPath: "./dist2/",
		path: __dirname + "/public/dist",
	},
};