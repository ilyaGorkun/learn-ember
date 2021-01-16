const { Group } = require('./group.module');
const { createValueForUserGroup } = require('../userGroup/userGroup.service');
const GroupResponseDto = require('./dto/group.response');
const GroupsResponseDto = require('./dto/groups.response');

const getGroups = async (page = 10, limit = 10) => {
  const PAGE_SIZE = parseInt(limit);
  const skip = (page - 1) * PAGE_SIZE;
  const groups = await Group.find({}).skip(skip).limit(PAGE_SIZE);
  return new GroupsResponseDto(
    groups.map(
      (group) => new GroupResponseDto(group.id, group.name, group.users)
    )
  );
};

const getGroupByName = async (id) => {
  const group = await Group.findById(id).populate('users');
  const users = group.users.map((user) => user.id);
  return { group: new GroupResponseDto(group.id, group.name, users) };
};

const createGroup = async (groupDto) => {
  const { name, users } = groupDto.group;
  let group = await Group.create({ name });
  for (const id of users) {
    await Group.findByIdAndUpdate(group.id, {
      $push: { users: id },
    });
    createValueForUserGroup(id, group.id);
  }
  group = await Group.findById(group.id).populate('users');
  return { group: new GroupResponseDto(group.id, group.name, users) };
};

module.exports = {
  getGroups,
  getGroupByName,
  createGroup,
};
