const router = require('express').Router();
const userController = require('./user.controller');

router.get('/:page', (async (req, res) => {
    const users = await userController.getUsers(req.params.page);
    res.status(200).send(users);
}));

module.exports = router;