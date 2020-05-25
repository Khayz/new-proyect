const mongoose = require('mongoose');
const TeachersSchema = mongoose.Schema({
	firstName: { type: String },
	lastName: { type: String },
	email: { type: String },
	password: { type: String },
	phone: { type: Number },
	account: { type: String },
});

module.exports = mongoose.model('teachers_accounts', TeachersSchema);
