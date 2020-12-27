const { User } = require('./user.model');
const UserResponseDto = require('./dto/user.response');

const getUsers = async (part) => {
    const users = await User.find({});
    return users.map((user) => new UserResponseDto(user.id, user.firstName, user.lastName));
}

module.exports = {
    getUsers
};