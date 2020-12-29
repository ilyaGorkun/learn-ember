import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        getUsers() {
            this.store.findRecord('user', 1).then((user) => {
                alert(user.get('firstName') + ' ' + user.get('lastName'))
            })
        },
    }
});
