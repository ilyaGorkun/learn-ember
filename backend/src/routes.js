const routes = require('express').Router();

routes.use('/people', require('./people/people.route'));
routes.use('/group', require('./group/group.route'));

module.exports = routes;