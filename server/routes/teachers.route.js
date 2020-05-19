const router = require('express').Router();
const { Teachers, HomeWork } = require('../schemas/index.schemas');

router.put('/teacher', async (req, res) => {
	const { teacherID, data } = req.body;
	const teacher = await Teachers.findById(teacherID);
	await Teachers.updateOne({
		_id: teacherID,
		$set: { tasks: [...teacher.tasks, data] },
	});
	res.send('DONE');
});

router.post('/teacher', async (req, res) => {
	try {
		const homework = new HomeWork(req.body);
		const savedHomeWork = await homework.save();
		res.send(savedHomeWork);
	} catch (error) {
		console.log(error.message);
		res.send({ message: error.message });
	}
});

module.exports = router;
