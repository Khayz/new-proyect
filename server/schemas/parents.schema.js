const mongoose = require("mongoose");
const ParentsSchema = mongoose.Schema({
  firstName: { type: String },
  lastName: { type: String },
  email: { type: String },
  password: { type: String },
  phone: { type: Number },
  childs: { type: Array },
  account: { type: String },
});

module.exports = mongoose.model("parents_accounts", ParentsSchema);
