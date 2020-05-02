const router = require('express').Router();
const { Groups } = require('../schemas/index.schemas');

router.post('/groups', async (req, res) => {
	const newGroup = new Groups(req.body);
	await newGroup.save();
	res.send('Group Done');
});

module.exports = router;
