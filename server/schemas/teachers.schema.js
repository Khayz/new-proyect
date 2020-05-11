const mongoose = require('mongoose');
const TeachersSchema = mongoose.Schema({
	firstName: { type: String },
	lastName: { type: String },
	email: { type: String },
	password: { type: String },
	phone: { type: Number },
	cct: { type: Number },
	account: { type: String },
	tasks: { type: Array },
});

module.exports = mongoose.model('teachers_accounts', TeachersSchema);
