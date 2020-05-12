const router = require('express').Router();
const mongodb = require('mongodb');
require('dotenv').config({ path: __dirname + '../.env' });
const { Groups } = require('../schemas/index.schemas');

router.post('/groups', async (req, res) => {
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
		inviteID: '',
		teachers: [{ teacher: req.body.teacherID }],
		class_turn: dbGroup.turno,
		type: dbGroup.type,
	});
	const savedGroup = await newGroup.save();
	res.send(savedGroup);
});

router.get('/groups', async (req, res) => {
	const dbGroup = await Groups.find({
		'teachers.teacher': req.query.teacherID,
	});
	return res.send(dbGroup);
});

module.exports = router;
