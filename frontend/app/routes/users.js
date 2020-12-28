import Ember from 'ember';

export default Ember.Route.extend({
    actions: {
        triggerClick: () => {
            alert('Click');
        }
    }
});
