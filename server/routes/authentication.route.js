const router = require('express').Router();
const { Parents, Teachers } = require('../schemas/index.schemas');

router.post('/register', async (req, res) => {
	const data = req.body;
	const { email } = data;
	try {
		let findAccount = await Parents.find({ email });
		if (findAccount.length === 0) {
			findAccount = await Teachers.find({ email });
			return (
				findAccount.length > 0 && res.send({ message: 'Email already exists' })
			);
		}

		if (findAccount.length === 0 && data.account === 'parent') {
			const account = new Parents(data);
			const user = await account.save();
			return res.send(user);
		}

		if (findAccount.length === 0 && data.account === 'teacher') {
			const account = new Teachers(data);
			const user = await account.save();
			return res.send(user);
		}
	} catch (error) {
		res.send({ message: error });
	}
});

router.post('/login', async (req, res) => {
	const data = req.body;
	const { email, password } = data;
	let findAccount = await Parents.find({ email });
	if (findAccount === null) {
		findAccount = await Teachers.find({ email });
		return findAccount === null && res.send({ message: "Account don't exist" });
	}

	if (findAccount.password !== password) {
		return res.send({ message: 'Password Incorrect' });
	}

	res.send(findAccount);
});

module.exports = router;
