const mongoose = require('mongoose');
const { users } = require('../mock/users');

const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String
});
const User = mongoose.model('User', userSchema);

User.insertMany(users, (err, docs) => {
    if (err) return console.log(err);

    console.log(docs);
})

module.exports.User = User;