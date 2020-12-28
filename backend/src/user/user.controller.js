const userService = require('./user.service');

const getUsers = async (page) => {
  const users = await userService.getUsers(page);
  return users;
};

module.exports = {
  getUsers,
};
