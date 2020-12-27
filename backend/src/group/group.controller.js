const groupService = require('./group.service');

const createGroup = async (users) => {
    return await groupService.createGroup(users);
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