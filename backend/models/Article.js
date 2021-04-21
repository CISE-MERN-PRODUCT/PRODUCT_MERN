const mongoose = require('mongoose');

const Article = new mongoose.Schema({
	title: {
		type: String,
		required: true,
	},
	author: {
		type: String,
		default: 'Unknown',
	},
	year: {
		type: String,
		default: 'Unknown',
	},
	claim: {
		type: String,
		default: 'Unknown',
	},
	se_practice: {
		type: String,
		default: 'Unknown',
	},
	evidence_strength: {
		type: String,
		default: 'Unknown',
	},
});

module.exports = mongoose.model('Article', Article);
