const router = require('express').Router();
const groupsController = require('./group.controller');

router.get('/', async (req, res) => {
  const groupsDto = await groupsController.getGroups(req.query.page);
  res.status(200).send(groupsDto);
});

router.get('/:name/users', async (req, res) => {
  const groupDto = await groupsController.getGroupByName(req.params.name);
  res.status(200).send(groupDto);
});

router.post('/', (req, res) => {
  groupsController.createGroup(req.body);
  res.status(200).send('Post all groups');
});

module.exports = router;
