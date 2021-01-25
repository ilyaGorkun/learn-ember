import DS from 'ember-data';

export default DS.RESTAdapter.extend({
    host: 'https://cat-fact.herokuapp.com',
    namespace: 'facts',
    contentType: 'application/json; charset=utf-8',
    pathForType: function (type) {
        return Ember.String.underscore(type);
    }
});
