import Ember from 'ember';

export default Ember.Route.extend({
    model(param) {
        return this.get('store').query('user', { page: param.page || 2 });
    }
});
