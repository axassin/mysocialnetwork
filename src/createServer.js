import mainIndex from './views/index';
import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import KoaRouter from 'koa-router';
import http from 'http';
import mainRouter from './routes/mainRouter'
import mongoose from 'mongoose'
import config from './configs/development'
import Promise from 'bluebird'

export default async function createServer(opts) {
	const app = new Koa();
	const router = new KoaRouter();
	mongoose.Promise = Promise
	mongoose.connect(config.db)
	const db = mongoose.connection
	db.on('open', () => {
		console.info('Connected to database')
	})

	app.use(bodyParser());
	
	app.use(mainRouter.routes())

	mongoose.set('debug', (collectionName, method, query, doc) => {
	console.log(collectionName);
	console.log(method);
	});
	// app.use(router.routes())

	app.use((ctx) => {
		if(ctx.method === 'GET') {
			ctx.response.set('content-type', 'text/html');
			ctx.body = mainIndex();
			return;
		}
	})

	
	
	let server = http.createServer(app.callback())
	server.listen(opts.port)
}