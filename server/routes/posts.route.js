const router = require('express').Router();
const { Posts, Groups } = require('../schemas/index.schemas');

router.get('/posts', async (req, res) => {
	const { id } = req.query;
	const group = await Groups.findOne({ inviteID: id });
	const groupPosts = await Posts.find({ groupId: group._id });
	res.send(groupPosts);
});

module.exports = router;
