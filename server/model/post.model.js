const mongoose = require('mongoose');


const Schema = new mongoose.Schema({
	title: {
		type: String,
		required: true
	},
	content: {
		type: String,
		required: true
	},
	author: {
		type: String,
		required: true,
		default: 'Anonymous'
	},
	attachment:String,
	likeCount: {
		type: Number,
		default:0
	}
}, { timestramps: true })
const postModel = mongoose.model('post', Schema);
module.exports = postModel;