const router = require('express').Router();
const userGroupController = require('./userGroup.controller');

router.get('/', async (req, res) => {
  const valuesDto = await userGroupController.getUsersFromGroupById(
    req.query.groupId
  );
  res.status(200).send(valuesDto);
});

module.exports = router;
