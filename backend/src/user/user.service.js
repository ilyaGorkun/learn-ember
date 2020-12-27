const { User } = require('./user.model');
const UserResponseDto = require('./dto/user.response');
const PAGE_SIZE = 10;

const getUsers = async (page) => {
    const skip = (page - 1) * PAGE_SIZE;
    const users = await User.find({}).skip(skip).limit(PAGE_SIZE);
    return users.map((user) => new UserResponseDto(user.id, user.firstName, user.lastName));
}

module.exports = {
    getUsers
};