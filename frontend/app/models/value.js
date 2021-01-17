import DS from 'ember-data';

export default DS.Model.extend({
    userId: DS.attr('string'),
    groupId: DS.attr('string'),
    value: DS.attr('number')
});
