const {log: _} = console;

export const getName = (name) => _(name);
export const getSurname = (surname) => _(surname);

export default getFullName = (name, surname) => _(`${name} ${surname}`);