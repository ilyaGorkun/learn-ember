const groupService = require('./group.service');

const createGroup = async (group) => await groupService.createGroup(group);

const getGroups = async (page) => await groupService.getGroups(page, limit);

const getGroupByName = async (id) => await groupService.getGroupByName(id);

module.exports = {
  createGroup,
  getGroups,
  getGroupByName,
};
