module.exports = {
	entry: [
		'./views/app/index.js'
	],
	output: {
		path: __dirname,
		filename: 'bundle.js',
		publicPath: '/'
	},
	module: {
	loaders: [{
		loaders: ['babel-loader'],
		exclude: /node_module/,
		include: __dirname
	}]
	},
	resolve: {
		extensions: ['', '.js','.jsx']
	},
	devServer: {
		historyApiFallback: true,
		contentBase: './'
	}
}