import Ember from 'ember';

export default Ember.Controller.extend({
    queryParams: ["page", "limit"],
    page: 1,
    limit: 10,
    actions: {
        setPage(page) {
            this.set("page", page);
        }
    }
});
