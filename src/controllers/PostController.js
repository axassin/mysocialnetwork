import Post from '../models/Post';

const list = async (ctx) => {
	let posts = await Post.list();
	ctx.body = posts
}

export default {
	list
}