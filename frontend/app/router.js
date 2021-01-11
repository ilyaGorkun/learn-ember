import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('users', { path: '/users' });
  this.route('groups', { path: '/groups' });
  this.route('group', { path: '/group/:id' });
});

export default Router;
