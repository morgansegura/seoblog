const mongoose = require('mongoose')
const crypto = require('crypto')

const userSchema = new mongoose.Schema({
	userName: {
		type: String,
		trim: true,
		required: true,
		maxLength: 32,
		unique: true,
		index: true,
		lowerCase: true,
	},
	userName: {
		type: String,
		trim: true,
		required: true,
		maxLength: 32,
	},
	email: {
		type: String,
		trim: true,
		required: true,
		unique: true,
		lowerCase: true,
	},
	profile: {
		type: String,
		required: true,
	},
	hashedPassword: {
		type: String,
		required: true,
	},
	salt: String,
	about: {
		type: String,
	},
	role: {
		type: Number,
		trim: true,
	},
	photo: {
		data: Buffer,
		contentType: String,
	},
	resetPasswordLink: {
		data: String,
		default: '',
	},
})
