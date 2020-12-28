class GroupResponseDto {
  constructor(id, name, users = undefined) {
    this.id = id;
    this.name = name;
    this.users = users;
  }
}

module.exports = GroupResponseDto;
