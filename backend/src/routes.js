const routes = require('express').Router();

routes.use('/people', require('./people/people.route'));

module.exports = routes;