import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        this.store.push('users', {
            id: '1',
            firstName: 'Ilya',
            lastName: 'gorkun'
        });

        this.store.push('album', {
            id: '2',
            firstName: 'Vova',
            lastName: 'gorkun'
        });
    }
});