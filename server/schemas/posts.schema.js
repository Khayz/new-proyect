const mongoose = require('mongoose');
const PostsSchema = mongoose.Schema({
	title: { type: String },
	description: { type: String },
	dueDate: { type: String },
	teacherID: { type: String },
	groupID: { type: String },
	assignment: { type: String },
});

module.exports = mongoose.model('group_posts', PostsSchema);
