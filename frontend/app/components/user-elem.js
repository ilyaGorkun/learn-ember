import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        onChange() {
            this.sendAction('action', this.get('id'));
        }
    }
});
