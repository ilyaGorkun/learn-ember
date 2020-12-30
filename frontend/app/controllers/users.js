import Ember from 'ember';

export default Ember.Controller.extend({
    listId: [],
    actions: {
        addUser(id) {
            console.log(id);
            this.listId.push(id);
            console.log(this.listId);

        },
        createGroup() {
            const nameGroup = this.get('newNameGroup');
            const newGroup = this.get('store').createRecord('group', {
                name: nameGroup,
                users: this.get('store').peekAll('user').filter((user) => this.listId.includes(user.id))
            })
            newGroup.save();
        },
        checkUser(id) {
            return this.listId.includes(id);
        }
    }
});
