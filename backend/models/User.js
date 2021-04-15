const mongoose = require('mongoose');

const User = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
	password: {
		type: String,
		required: true,
	},
	// isAdmin: {
	// 	type: Boolean,
	// 	default: false,
	// },
	userType: {
		type: String,
		enum: ['user', 'admin', 'moderator', 'analyst'],
		default: 'user',
	},
});

module.exports = mongoose.model('User', User);
