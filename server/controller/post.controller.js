const postModel = require('../model/post.model')

const getPost = {
	getPost: async (req, res) => {
		try {
			const post = await postModel.find()
			res.status(200).json(post);
		}
		catch (err) {
			res.status(500).json(err)
		}
	},
	postPost: async (req, res) => {
		try {
			const newPost = new postModel(req.body);
			res.status(200).json(await newPost.save())
		}
		catch (err) {
			res.status(500).json(err)
		}
	},
	updatepost: async (req, res) => {
		try {
			const update = await postModel.findById(req.params.id);
			await update.updateOne({ $set: req.body });
			res.status(200).json("successful update")
		}
		catch (err) {
			res.status(500).json(err)
		}
	}
}

module.exports = getPost;


