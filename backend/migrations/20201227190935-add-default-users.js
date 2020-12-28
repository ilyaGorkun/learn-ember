module.exports = {
  async up(db, client) {
    await db.collection('users').insert({ firstName: 'Vasya', lastName: 'Petrov' });
    await db.collection('users').insert({ firstName: 'Ilya', lastName: 'Petrov' });
    await db.collection('users').insert({ firstName: 'Bob', lastName: 'Petrov' });
    await db.collection('users').insert({ firstName: 'Jack', lastName: 'Petrov' });
    await db.collection('users').insert({ firstName: 'Kevin', lastName: 'Petrov' });
    await db.collection('users').insert({ firstName: 'Oly', lastName: 'Petrov' });
    await db.collection('users').insert({ firstName: 'Alex', lastName: 'Petrov' });
    await db.collection('users').insert({ firstName: 'Ivan', lastName: 'Petrov' });
    await db.collection('users').insert({ firstName: 'John', lastName: 'Petrov' });
    await db.collection('users').insert({ firstName: 'Katy', lastName: 'Petrov' });
  },

  async down(db, client) {
  }
};
