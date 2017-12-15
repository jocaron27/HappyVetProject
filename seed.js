const db = require('./db');
const Vets = require('./db/models/vets');
const Users = require('./db/models/users');


const vets = [{
  name: 'Hunter Jakubowski',
  description: 'Great with cats'
}, {
  name: 'Jermaine Casper',
  description: 'Great with rabbits'
}, {
  name: 'Lavonne Pollich',
  description: '50 years of experience'
}, {
  name: 'Ellsworth Pacocha',
  description: 'Great with dogs'
}, {
  name: 'Aiyana Veum',
  description: 'Seen over 10,000 pets'
}, {
  name: 'Logan Thiel',
  description: 'Free coffee for owners while you wait'
}, {
  name: 'Jaylin Gleichner',
  description: 'Great with cats'
}, {
  name: 'Alyson Nicolas',
  description: 'Great with bird'
}, {
  name: 'Milton Chandler',
  description: 'Just graduated from veterinary school'
}];

const users = [{
  name: 'Jeanne Castillo'
}]

const seed = () =>
Promise.all(vets.map(vet =>
  Vets.create(vet))
)
.then(() =>
Promise.all(users.map(user =>
  Users.create(user))
)
);

const main = () => {
  console.log('Syncing db...');
  db.sync({ force: true })
    .then(() => {
      console.log('Seeding databse...');
      return seed();
    })
    .catch(err => {
      console.log('Error while seeding');
      console.log(err.stack);
    })
    .then(() => {
      db.close();
      return null;
    });
};

main();
