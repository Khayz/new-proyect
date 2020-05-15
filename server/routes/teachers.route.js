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
	const { studentID, teacherID, calification, status, title, date } = req.body;
	try {
		const homework = new HomeWork({
			studentID,
			teacherID,
			calification,
			status,
			title,
			date,
		});
		const savedHomeWork = await homework.save();
		const teacher = await Teachers.findOne({ _id: teacherID });
		await Teachers.updateOne(
			{ _id: req.body.teacherID },
			{
				$set: {
					tasks: [
						...teacher.tasks,
						{ ...req.body, homeworkID: savedHomeWork._id },
					],
				},
			}
		);
		res.send({ message: 'Tarea Entregada' });
	} catch (error) {
		console.log(error.message);
		res.send({ message: error.message });
	}
});

module.exports = router;
