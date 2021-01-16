const userGroupService = require('./userGroup.service');

const getUsersFromGroupById = (groupId) =>
  userGroupService.getValueUserGroup(groupId);

module.exports = {
  getUsersFromGroupById,
};
