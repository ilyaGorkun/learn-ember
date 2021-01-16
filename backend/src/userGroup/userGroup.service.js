const { UserGroup } = require('./userGroup.model');

const MAX_SIZE = 100;

const getValueUserGroup = async (groupId) => {
  const users = await UserGroup.find({ groupId });
  const usersDto = users.map((user) => ({
    userId: user.userId,
    value: user.value,
  }));
  return { users: usersDto };
};

const createValueForUserGroup = async (userId, groupId) => {
  const randomNumber = Math.floor(Math.random() * MAX_SIZE);
  const userGroup = await UserGroup.create({
    userId,
    groupId,
    value: randomNumber,
  });
  await userGroup.save();
};

module.exports = { getValueUserGroup, createValueForUserGroup };
