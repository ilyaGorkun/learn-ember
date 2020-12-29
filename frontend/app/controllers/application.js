import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        click() {
            this.store.findRecord('user', 1).then((user) => {
                console.log(user);
            })
        },
    }
});
