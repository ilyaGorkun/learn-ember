const router = require('express').Router();
const groupsController = require('./group.controller');

router.get('/page', (async (req, res) => {
    const groupsDto = await groupsController.getGroups(page);
    res.status(200).send(groupsDto);
}));

router.get('/:name', (async (req, res) => {
    const groupDto = await groupsController.getGroupByName(name)
    res.status(200).send(groupDto);
    res.status.send('Get all groups');
}));

router.post('/', ((req, res) => {
    groupsController.createGroup(req.body || []);
    res.status.send('Post all groups');
}));

module.exports = router;