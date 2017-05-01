import jwt from 'koa-jwt';

const authenticate = (ctx) => {
	let credential = ctx.request.body
	if(credential.password === 'password') {
		ctx.status = 200;
		console.log(ctx.state.secret)
		ctx.body = {
			message :'success'
		}
	} else {
		ctx.status = 401;
		ctx.body =  {
			message: 'Authentication Failed'
		}
	}
	return ctx
}

export default authenticate