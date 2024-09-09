const {log: _} = console;

const getName = (name) => _(name);
const getSurname = (surname) => _(surname);
const getFullName = (name, surname) => _(`${name} ${surname}`);

module.exports = getName;
module.exports = getSurname;

module.exports = getFullName;