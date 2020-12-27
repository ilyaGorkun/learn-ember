const groupService = require('./group.service');

const createGroup = async (group) => {
    return await groupService.createGroup(group);
}

const getGroups = async (page) => {
    return await groupService.getGroups(page);
}

const getGroupByName = async (name) => {
    return await groupService.getGroupByName(name);
}

module.exports = {
    createGroup,
    getGroups,
    getGroupByName,
}