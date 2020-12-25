const router = require('express').Router();
const groupsController = require('./group.controller');

router.get('/', ((req, res) => {
    res.status.send('Get all groups');
}));

router.post('/', ((req, res) => {
    res.status.send('Post all groups');
}));

module.exports = router;