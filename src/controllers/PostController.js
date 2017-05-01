import Post from '../models/Post';

const list = async (ctx) => {
	let posts = await Post.list();
	ctx.body = posts
}

const add = (ctx) => {
	Post.store(ctx.request.body)
}

export default {
	list,
	add
}