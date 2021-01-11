const router = require('express').Router();
const userController = require('./user.controller');

router.get('/', async (req, res) => {
  const usersDto = await userController.getUsers(
    req.query.page,
    req.query.limit
  );
  res.status(200).send(usersDto);
});

router.get('/:id', async (req, res) => {
  const userDto = await userController.getUserById(req.params.id);
  res.status(200).send(userDto);
});

module.exports = router;
