import DS from 'ember-data';
import group from './group';

export default DS.Model.extend({
    userId: DS.attr('string'),
    firstName: DS.attr('string'),
    lastName: DS.attr('string'),
    groups: DS.hasMany('group')
});
