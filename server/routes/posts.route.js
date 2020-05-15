const router = require('express').Router();
const { Posts, Groups } = require('../schemas/index.schemas');

router.get('/posts', async (req, res) => {
	const { id } = req.query;
	const groupPosts = await Posts.find({ groupID: id });
	console.log(id, groupPosts);
	res.send(groupPosts);
});

router.post('/add-task', async (req, res) => {
	const { groupID } = req.body;
	try {
		const post = new Posts(req.body);
		await post.save();
		const group = await Groups.findOne({ _id: groupID });
		await Groups.updateOne(
			{ _id: groupID },
			{ $set: { tasks: [...group.tasks, req.body] } }
		);
		res.send('Post Added');
	} catch (error) {
		console.log(error.message);
		res.send({ message: error.message });
	}
});

module.exports = router;
