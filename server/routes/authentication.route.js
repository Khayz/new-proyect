const router = require('express').Router();
const { Parents, Teachers } = require('../schemas/index.schemas');

router.post('/register', async (req, res) => {
	const data = req.body;
	const { email } = data;
	try {
		let findAccount = await Parents.find({ email });
		if (findAccount.length > 0) {
			return res.send({ message: 'Email already exists' });
		}

		findAccount = await Teachers.find({ email });
		if (findAccount.length > 0) {
			return res.send({ message: 'Email already exists' });
		}

		if (findAccount.length === 0 && data.account === 'parent') {
			const account = new Parents(data);
			const user = await account.save();
			return res.send(user);
		}

		if (findAccount.length === 0 && data.account === 'teacher') {
			const account = new Teachers({ ...data, tasks: [] });
			const user = await account.save();
			return res.send(user);
		}
	} catch (error) {
		res.send({ message: error.message });
	}
});

router.post('/login', async (req, res) => {
	const { email, password } = req.body;
	let findAccount = await Parents.findOne({ email });
	if (findAccount === null) {
		findAccount = await Teachers.findOne({ email });
	}

	if (findAccount === null) {
		findAccount === null && res.send({ message: "Account don't exist" });
	}

	if (findAccount.password !== password) {
		return res.send({ message: 'Password Incorrect' });
	}

	res.send(findAccount);
});

module.exports = router;
