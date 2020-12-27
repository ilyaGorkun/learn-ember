const peopleService = require('./people.service');

const getPeople = (part) => {
    return peopleService.getPeople(part);
}

module.exports = {
    getPeople
}