import mongoose from 'mongoose'

const PostSchema = new mongoose.Schema({
	title : {
		type : String,
		required: true
	},
	message : {
		type : String,
		required: true
	},
	createdAt: {
		type: Date,
		default: Date.now
	}
})

PostSchema.statics = {
	list() {
		return this.find()
	},
	store(data) {
		const Post = mongoose.model('Post', PostSchema);
		const newPost = new Post(data);
		newPost.save(function(err){
			console.log(err)
		})
	},
	show(id) {
		return this.findById(id)
	},
	delete(id) {
		return this.findByIdAndRemove(id, function(params) {
			return params
		});
	}
}

export default mongoose.model('Post', PostSchema)