const routes = require('express').Router();

routes.use('/users', require('./user/user.route'));
routes.use('/group', require('./group/group.route'));

module.exports = routes;
