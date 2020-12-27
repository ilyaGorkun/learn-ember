const { Group } = require('./group.module');
const GroupResponseDto = require('./dto/group.response');
const PAGE_SIZE = 10;

const getGroups = async (page) => {
    const skip = (page - 1) * PAGE_SIZE;
    const groups = await Group.find({}).skip(skip).limit(PAGE_SIZE);

    return groups.map((group) => new GroupResponseDto(group.id, group.name));
}

const getGroupByName = async (name) => {
    const group = await Group.find({ name });
    return group;
}

const createGroup = async (users) => {

}

module.exports = {
    getGroups,
    getGroupByName,
    createGroup
}