import Post from '../models/Post';

const list = async (ctx) => {
	const posts = await Post.list();
	ctx.body = posts
	return posts
}

const add = async (ctx) => {
	await Post.store(ctx.request.body)
	ctx.status = 201
}

const show = async (ctx) => {
	const post = await Post.show(ctx.params.id)
	ctx.body = post
}

const del = async (ctx) => {
	await Post.delete(ctx.params.id)
	ctx.body = list()
}

export default {
	list,
	add,
	show,
	del
}