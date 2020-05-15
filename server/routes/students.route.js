const router = require('express').Router();
const { Students, Groups, Parents } = require('../schemas/index.schemas');

router.post('/students', async (req, res) => {
	const { groupID, parentID } = req.body;
	try {
		const studentGroup = await Groups.findOne({ inviteID: groupID });
		const parent = await Parents.findOne({ _id: parentID });
		if (studentGroup === null) {
			return res.send({ message: 'GroupID Incorrect' });
		}
		const { school, group, assignments, _id } = studentGroup;
		const student = new Students({
			...req.body,
			school,
			group,
			groupID: _id,
			assignments,
			parentName: `${parent.firstName} ${parent.lastName}`,
		});
		const newStudent = await student.save();
		await Groups.updateOne(
			{ _id: studentGroup._id },
			{
				$set: { students: [...studentGroup.students, newStudent] },
			}
		);
		await Parents.updateOne(
			{ _id: parent._id },
			{
				$set: { childs: [...parent.childs, newStudent._id] },
			}
		);

		res.send(newStudent);
	} catch (error) {
		return res.send({ message: error.message });
	}
});

router.get('/students', async (req, res) => {
	const { id } = req.query;
	try {
		const students = await Students.find({ parentID: id });
		res.send(students);
	} catch (error) {
		console.log(error.message);
		res.send({ message: error.message });
	}
});

router.delete('/students', async (req, res) => {
	const child = JSON.parse(req.query.child);
	try {
		await Students.deleteOne({ _id: child._id });
		const parentChild = await Parents.findOne({ _id: child.parentID });
		await Parents.updateOne(
			{ _id: child.parentID },
			{
				$set: {
					childs: parentChild.childs.filter(
						(student) => String(student) !== child._id
					),
				},
			}
		);
		const groupChild = await Groups.findOne({ _id: child.groupID });
		await Groups.updateOne(
			{ _id: child.groupID },
			{
				$set: {
					students: groupChild.students.filter(
						(student) => String(student._id) !== child._id
					),
				},
			}
		);
		res.send('CHILD DELETED');
	} catch (error) {
		console.log(error.message);
		res.send({ message: error.message });
	}
});

module.exports = router;
