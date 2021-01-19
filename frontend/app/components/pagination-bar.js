import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        click(direction) {
            this.sendAction('action', direction);
        }
    }
});
