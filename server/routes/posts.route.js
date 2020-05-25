const router = require('express').Router();
const mailer = require('../mailer');
const { Posts, Groups } = require('../schemas/index.schemas');

router.get('/posts', async (req, res) => {
	const { id } = req.query;
	const groupPosts = await Posts.find({ groupID: id });
	res.send(groupPosts);
});

router.post('/add-task', async (req, res) => {
	const { groupID } = req.body;
	try {
		const post = new Posts(req.body);
		const savedPost = await post.save();
		const group = await Groups.findOne({ _id: groupID });

		mailer(group.emailList);

		await Groups.updateOne(
			{ _id: groupID },
			{ $set: { tasks: [...group.tasks, req.body] } }
		);
		res.send(savedPost);
	} catch (error) {
		res.send({ message: error.message });
	}
});

module.exports = router;
