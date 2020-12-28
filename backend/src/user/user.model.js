const mongoose = require('mongoose');
const { users } = require('./mock/users');

const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String
});
const User = mongoose.model('User', userSchema);

module.exports.User = User;