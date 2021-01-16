const mongoose = require('mongoose');

const userGroupSchema = new mongoose.Schema({
  userId: String,
  groupId: String,
  value: Number,
});

const UserGroup = mongoose.model('UserGroup', userGroupSchema, 'usersGroups');

module.exports.UserGroup = UserGroup;
