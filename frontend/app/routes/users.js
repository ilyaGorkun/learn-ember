import Ember from 'ember';

export default Ember.Route.extend({
    ajax: Ember.inject.service(),
    queryParams: {
        page: {
            refreshModel: true
        },
        limit: {
            refreshModel: true
        }
    },
    model(params) {
        const getUsersPromises = this.get('store').query('user', params);
        const getCatFact = this.get('ajax').request('facts/random');
        return Ember.RSVP.hash({
            catFact: getCatFact,
            users: getUsersPromises
        });
    },
    setupController(controller, { catFact, users }) {
        controller.set('users', users);
        controller.set('catFact', catFact.text);
    }
});
