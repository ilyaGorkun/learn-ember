const router = require('express').Router();
const groupsController = require('./group.controller');
const userGroupController = require('../userGroup/userGroup.controller');

router.get('/', async (req, res) => {
  const groupsDto = await groupsController.getGroups(
    req.query.page,
    req.query.limit
  );
  res.status(200).send(groupsDto);
});

router.get('/:id', async (req, res) => {
  const groupDto = await groupsController.getGroupByName(req.params.id);
  res.status(200).send(groupDto);
});

router.get('/:groupId/users', async (req, res) => {
  const usersOfGroupDto = await userGroupController.getUsersFromGroupById(
    req.params.groupId
  );
  res.status(200).send(usersOfGroupDto);
});

router.post('/', (req, res) => {
  const groupDto = groupsController.createGroup(req.body);
  res.status(200).send(groupDto);
});

module.exports = router;
