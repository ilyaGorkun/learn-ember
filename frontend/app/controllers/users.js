import Ember from 'ember';

export default Ember.Controller.extend({
    listId: [],
    actions: {
        addUser(id) {
            console.log(id);
            this.listId.push(id);
            console.log(this.listId);

        },
        checkUser(id) {
            return this.listId.includes(id);
        }
    }
});
