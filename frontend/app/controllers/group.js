import Ember from 'ember';

export default Ember.Controller.extend({
    name: Ember.computed('group', function () {
        return this.get('group').get('name');
    }),
    statistic: Ember.computed('values', 'group', function () {
        const result = this.get('group').get('users').map((user) => {
            const value = this.get('values').find((value) => {
                return value.get('userId') === user.id
            })
            return {
                id: value.get('id'),
                user,
                value: value.get('value'),
            }
        })
        return result;
    }),
});
