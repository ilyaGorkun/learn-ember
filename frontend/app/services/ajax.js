
import AjaxService from 'ember-ajax/services/ajax';
export default AjaxService.extend({
    host: 'https://cat-fact.herokuapp.com',
    contentType: 'application/json; charset=utf-8'
});
