const router = require('express').Router();

router.get('/:part', ((req, res) => {
    res.send(`Get part(${req.params.part}) people`);
}));

module.exports = router;