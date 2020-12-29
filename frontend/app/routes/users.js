import Ember from 'ember';

export default Ember.Route.extend({
    actions: {
        triggerClick: () => {
            alert('Click');
        }
    },
    model() {
        console.log(this.store.find('users',));
    }
});
