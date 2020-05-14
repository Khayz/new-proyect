const router = require('express').Router();
const { Teachers } = require('../schemas/index.schemas');

router.put('/teacher', async (req, res) => {
	const { teacherID, data } = req.body;
	const teacher = await Teachers.findOne({ _id: teacherID });
	await Teachers.updateOne({
		_id: teacherID,
		$set: { tasks: [...teacher.tasks, data] },
	});
	res.send('DONE');
});

module.exports = router;
