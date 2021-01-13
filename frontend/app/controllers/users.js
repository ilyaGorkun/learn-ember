import Ember from 'ember';

export default Ember.Controller.extend({
    queryParams: ["page", "limit"],
    page: 1,
    limit: 10,
    listId: [],
    actions: {
        addUser(id) {
            this.listId.push(id);
        },
        createGroup() {
            const nameGroup = this.get('newNameGroup');
            const users = this.get('store').peekAll('user').filter((user) => this.listId.includes(user.id));
            const newGroup = this.get('store').createRecord('group', {
                name: nameGroup,
                users
            });
            newGroup.save();
        },
        checkUser(id) {
            return this.listId.includes(id);
        },
        setPage(page) {
            this.set("page", page);
        }
    }
});
