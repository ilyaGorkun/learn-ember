import Ember from 'ember';

export default Ember.Controller.extend({
    name: Ember.computed('model', function () {
        return this.get('model').get('name');
    }),
    users: Ember.computed('model', function () {
        return this.get('model').get('users');
    })
});
