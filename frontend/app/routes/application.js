import Ember from 'ember';

export default Ember.Route.extend({
    models: function () {
        this.store.findAll('users');
    }
});
