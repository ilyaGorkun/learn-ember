const { User } = require('./user.model');
const UserResponseDto = require('./dto/user.response');
const UsersResponseDto = require('./dto/users.response');

const getUsers = async (page, limit) => {
  const PAGE_SIZE = limit || 10;
  const skip = (page - 1) * PAGE_SIZE;
  const users = await User.find({}).skip(skip).limit(PAGE_SIZE);

  return new UsersResponseDto(
    users.map(
      (user) => new UserResponseDto(user.id, user.firstName, user.lastName)
    )
  );
};

module.exports = {
  getUsers,
};
