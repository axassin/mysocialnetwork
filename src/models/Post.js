import mongoose from 'mongoose'

const PostSchema = new mongoose.Schema({
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
	save(data) {
		this.save(data)
	}
}

export default mongoose.model('Post', PostSchema)