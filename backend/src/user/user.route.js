const router = require('express').Router();
const userController = require('./user.controller');

router.get('/:part', (async (req, res) => {
    const users = await userController.getUsers(req.params.part);
    res.status(200).send(users);
}));

module.exports = router;