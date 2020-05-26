const router = require('express').Router();
const { Teachers, HomeWork, Groups } = require('../schemas/index.schemas');

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
		res.send({ message: error.message });
	}
});

router.post('/new-teacher-group', async (req, res) => {
	const { teacherEmail, groupID } = req.body;
	try {
		const teacher = await Teachers.findOne({ email: teacherEmail });
		const group = await Groups.findOne({ _id: groupID });
		await Groups.updateOne(
			{ _id: groupID },
			{ $set: { teachers: [...group.teachers, { teacher: teacher._id }] } }
		);
		res.send('DONE');
	} catch (error) {
		res.send({ message: error.message });
	}
});

module.exports = router;
