const router = require('express').Router();
const peopleController = require('./people.controller');

router.get('/:part', ((req, res) => {
    res.status(200).send(peopleController.getPeople(req.params.part));
}));

module.exports = router;