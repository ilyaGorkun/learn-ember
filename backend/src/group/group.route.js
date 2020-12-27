const router = require('express').Router();
const groupsController = require('./group.controller');

router.get('/', ((req, res) => {
    res.status(200).send(groupsController.getGroups());
}));

router.get('/:id', ((req, res) => {
    res.status(200).send(groupsController.getGroupById(req.params.id));
    res.status.send('Get all groups');
}));

router.post('/', ((req, res) => {
    groupsController.createGroup(req.body || []);
    res.status.send('Post all groups');
}));

module.exports = router;