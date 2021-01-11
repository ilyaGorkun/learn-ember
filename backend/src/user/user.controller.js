const userService = require('./user.service');

const getUsers = async (page, limit) => {
  const users = await userService.getUsers(page, limit);
  return users;
};

const getUserById = async (id) => {
  const user = await userService.getUserById(id);
  return user;
};

module.exports = {
  getUsers,
  getUserById,
};
