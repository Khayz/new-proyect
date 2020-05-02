const mongoose = require('mongoose');
const GroupsSchema = mongoose.Schema({
	school: { type: String },
	group: { type: String },
	students: { type: Array },
	assignments: { type: Array },
	tasks: { type: Array },
	inviteID: { type: String },
});

module.exports = mongoose.model('groups_collections', GroupsSchema);
