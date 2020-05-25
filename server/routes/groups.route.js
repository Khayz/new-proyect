const router = require('express').Router();
const mongodb = require('mongodb');
require('dotenv').config({ path: __dirname + '../.env' });
const { Groups } = require('../schemas/index.schemas');

router.get('/groups', async (req, res) => {
	const dbGroup = await Groups.find({
		'teachers.teacher': req.query.teacherID,
	});
	return res.send(dbGroup);
});

router.post('/groups', async (req, res) => {
	console.log(req.body);

	const dbConnect = await mongodb.connect(process.env.DB_CONNECTION, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	});
	const dbGroup = await dbConnect
		.db()
		.collection('cct')
		.findOne({ CCT: req.body.cct });

	const newGroup = new Groups({
		...req.body,
		students: [],
		assignments: [],
		tasks: [],
		school: dbGroup.nombre,
		teachers: [{ teacher: req.body.teacherID }],
		class_turn: dbGroup.turno,
		type: dbGroup.type,
		emailList: [],
	});

	const savedGroup = await newGroup.save();
	res.send(savedGroup);
});

router.post('/add-assignment', async (req, res) => {
	console.log(req.body);
	try {
		const group = await Groups.findOne({ _id: req.body._id });
		console.log(group);
		await Groups.updateOne(
			{ _id: group._id },
			{ $set: { assignments: [...group.assignments, req.body.assignment] } }
		);
		res.send('Updated!');
	} catch (error) {
		res.send({ message: error.message });
	}
});

module.exports = router;
