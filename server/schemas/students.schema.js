const mongoose = require('mongoose');
const StudentsSchema = mongoose.Schema({
	firstName: { type: String },
	lastName: { type: String },
	parentID: { type: String },
	groupID: { type: String },
	parentName: { type: String },
	assignments: { type: Array },
	group: { type: String },
	school: { type: String },
	tasks: { type: Array },
});

module.exports = mongoose.model('students_accounts', StudentsSchema);
