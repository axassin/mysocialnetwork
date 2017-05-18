import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
	username: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true 
	},
	createdAt: {
		type: Date,
		default: Date.now
	}
})

UserSchema.statics = {
	list() {
		return this.find()
	}
}
