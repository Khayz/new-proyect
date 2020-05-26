const router = require('express').Router();
const { HomeWork } = require('../schemas/index.schemas');

router.get('/homework', async (req, res) => {
	const { id } = req.query;
	try {
		const homework = await HomeWork.find({ studentID: id });
		res.send(homework);
	} catch (error) {
		res.send({ message: error.message });
	}
});

router.get('/get-student-homework', async (req, res) => {
	const { studentID } = req.query;
	try {
		const homework = await HomeWork.find({ studentID });
		if (homework.length === 0) {
			return res.send({ message: 'No hay tareas de enviadas por el usuario.' });
		}
		return res.send(homework);
	} catch ({ message }) {
		return res.send({ message });
	}
});

router.put('/homework', async (req, res) => {
	const { id, calification, status, userID } = req.body;
	try {
		await HomeWork.updateOne({ _id: id }, { $set: { calification, status } });
		const homework = await HomeWork.find({ studentID: userID });
		res.send(homework);
	} catch (error) {
		res.send({ message: error.message });
	}
});

module.exports = router;
