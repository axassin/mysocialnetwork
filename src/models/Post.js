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
		let Post = mongoose.model('Post', PostSchema);
		let  newPost = new Post(data);
		newPost.save(function(err){
			console.log(err)
		})
	}
}

export default mongoose.model('Post', PostSchema)