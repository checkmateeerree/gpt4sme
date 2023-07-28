var mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  name: {type: String, required: true},
  email: {type: String, required: true},
  password: {type: String, required: true},
  grade: {type: String, required: true},
  incomeBracket: {type: String, required: true},
  interests: {type: Array, required: true},
  isAdmin: {type: Boolean, default: false}

}, {timestamps: true});

module.exports = mongoose.models.User || mongoose.model('User', UserSchema);
