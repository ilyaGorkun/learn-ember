const groupService = require('./group.service');

const createGroup = (group) => groupService.createGroup(group);

const getGroups = (page) => groupService.getGroups(page, limit);

const getGroupByName = (id) => groupService.getGroupByName(id);

module.exports = {
  createGroup,
  getGroups,
  getGroupByName,
};
