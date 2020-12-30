import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('users', { path: '/users/:page' });
  this.route('groups');
});

export default Router;
