const mongoose = require('mongoose');
const homeworkSchema = mongoose.Schema({
	studentID: { type: String },
	teacherID: { type: String },
	calification: { type: String },
	status: { type: String },
	title: { type: String },
	date: { type: String },
});

module.exports = mongoose.model('homework_students', homeworkSchema);
