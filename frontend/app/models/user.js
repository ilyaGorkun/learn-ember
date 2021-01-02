import DS from 'ember-data';

export default DS.Model.extend({
    userId: DS.attr('string'),
    firstName: DS.attr('string'),
    lastName: DS.attr('string'),
    groups: DS.belongsTo('group')
});
