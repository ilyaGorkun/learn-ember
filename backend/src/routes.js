const routes = require('express').Router();

routes.use('/users', require('./user/user.route'));
routes.use('/groups', require('./group/group.route'));
routes.use('/values', require('./userGroup/userGroup.route'));

module.exports = routes;
