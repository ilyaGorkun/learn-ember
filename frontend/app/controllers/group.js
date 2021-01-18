import Ember from 'ember';

export default Ember.Controller.extend({
    name: Ember.computed('group', function () {
        return this.get('group').get('name');
    }),
    users: Ember.computed('group', function () {
        const users = this.get('group').get('users');
        return users;
    }),
    values: Ember.computed('values', 'group', function () {
        return this.get('values');
    }),
    actions: {
        hello() {
            return "hello"
        }
    }
});
