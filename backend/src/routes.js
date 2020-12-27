const routes = require('express').Router();

routes.use('/user', require('./user/user.route'));
routes.use('/group', require('./group/group.route'));

module.exports = routes;