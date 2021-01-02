const router = require('express').Router();
const userController = require('./user.controller');

router.get('/', async (req, res) => {
  const usersDto = await userController.getUsers(
    req.query.page,
    req.query.limit
  );
  res.status(200).send(usersDto);
});

module.exports = router;
