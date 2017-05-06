import convert from 'koa-convert';

export default function configureWebpackDevServer(app) {
	const webpack = require('webpack')
	const webpackDev = require('koa-webpack-dev-middleware')
	const webpackConfig = require('../views/webpack.config')

	const compiler = webpack(webpackConfig);
	app.use(convert(webpackDev(compiler, {
		noInfo: true,
		publicPath: webpackConfig.output.publicPath
	})))
}