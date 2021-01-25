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
        // const getCatFact = this.get('store').findRecord('random');
        return getUsersPromises;
    },
});
