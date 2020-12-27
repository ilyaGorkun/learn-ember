const router = require('express').Router();
const userController = require('./user.controller');

router.get('/:page', (async (req, res) => {
    const usersDto = await userController.getUsers(req.params.page);
    res.status(200).send(usersDto);
}));

module.exports = router;