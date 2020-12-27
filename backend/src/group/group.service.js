const { Group } = require('./group.module');
const GroupResponseDto = require('./dto/group.response');
const UserResponseDto = require('../user/dto/user.response');
const PAGE_SIZE = 10;

const getGroups = async (page) => {
    const skip = (page - 1) * PAGE_SIZE;
    const groups = await Group.find({}).skip(skip).limit(PAGE_SIZE);
    return groups.map((group) => new GroupResponseDto(group.id, group.name));
}

const getGroupByName = async (name) => {
    const group = await Group.findOne({ name }).populate('users');
    const users = group.users.map((user) => new UserResponseDto(user.id, user.firstName, user.lastName));
    return new GroupResponseDto(group.id, group.name, users);
}

const createGroup = async (groupDto) => {
    const { name, users } = groupDto;
    const group = await Group.create({ name });
    for (const id of users) {
        await Group.findByIdAndUpdate(group.id, {
            $push: { users: id }
        });
    }
}

module.exports = {
    getGroups,
    getGroupByName,
    createGroup
}