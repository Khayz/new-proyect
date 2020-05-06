const mongoose = require("mongoose");
const PostsSchema = mongoose.Schema({
  title: { type: String },
  description: { type: String },
  dueDate: { type: Date },
  teacherId: { type: String },
  groupId: { type: String },
  assignmentId: { type: String },
});

module.exports = mongoose.model("posts", PostsSchema);
