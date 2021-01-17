import Ember from 'ember';

export default Ember.Controller.extend({
    name: Ember.computed('group', function () {
        return this.get('group').get('name');
    }),
    users: Ember.computed('group', function () {
        return this.get('group').get('users');
    }),
    values: Ember.computed('model', function () {
        return this.get('model').get('values');
    })
});
