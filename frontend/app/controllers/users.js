import Ember from 'ember';

export default Ember.Controller.extend({
    queryParams: ["page", "limit"],
    page: 1,
    limit: 10,
    listId: [],
    users: Ember.computed('users', function () {
        return this.get('users');
    }),
    catFact: Ember.computed('users', function () {
        console.log(this.get('catFact'));
        return this.get('catFact');
    }),
    actions: {
        addUser(id) {
            if (this.listId.includes(id)) {
                this.listId = this.listId.filter(elem => elem != id);
            } else {
                this.listId.push(id);
            }
        },
        createGroup() {
            if (this.listId.length) {
                const nameGroup = this.get('newNameGroup');
                const users = this.get('store').peekAll('user').filter((user) => this.listId.includes(user.id));
                const newGroup = this.get('store').createRecord('group', {
                    name: nameGroup,
                    users
                });
                newGroup.save();
            }
        },
        setPage(page) {
            this.set("page", page);
        }
    }
});
