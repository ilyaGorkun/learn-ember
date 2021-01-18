import Ember from 'ember';

export default Ember.Route.extend({
    model({ id }) {
        return Ember.RSVP.hash({
            values: this.get('store').query('value', { groupId: id }),
            group: this.get('store').findRecord('group', id)
        })
    },
    setupController(controller, { values, group }) {
        controller.set('group', group);
        controller.set('values', values);
    }
});
