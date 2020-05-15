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

module.exports = router;
