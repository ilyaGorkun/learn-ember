const userService = require('./user.service');

const getUsers = async (part) => {
    const users = await userService.getUsers(part)
    return users;
}

module.exports = {
    getUsers
}