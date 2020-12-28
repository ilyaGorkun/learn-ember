const groupService = require('./group.service');

const createGroup = async (group) => await groupService.createGroup(group);

const getGroups = async (page) => await groupService.getGroups(page);

const getGroupByName = async (name) => await groupService.getGroupByName(name);

module.exports = {
  createGroup,
  getGroups,
  getGroupByName,
};
