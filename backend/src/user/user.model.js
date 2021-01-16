const mongoose = require('mongoose');
const { users } = require('./mock/users');

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
});
const User = mongoose.model('User', userSchema, 'users');

async function addMock() {
  const count = await User.count({});
  console.log('Count mock users - ', count);
  if (count === 0) {
    User.insertMany(users, (err, docs) => {
      if (err) return console.log(err);

      console.log('Done');
    });
  }
}

addMock();

module.exports.User = User;
