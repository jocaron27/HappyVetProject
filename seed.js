const db = require('./db');
const Campus = require('./db/models/campuses');
const Student = require('./db/models/students');

const campuses = [{
  name: 'Mars',
  location: 'Mars',
  imageUrl: '/mars.png'
}, {
  name: 'Neptune',
  location: 'Neptune',
  imageUrl: '/neptune.png'
}, {
  name: 'Venus',
  location: 'Venus',
  imageUrl: '/venus.png'
}, {
  name: 'Jupiter',
  location: 'Jupiter',
  imageUrl: '/jupiter.png'
}];

const students = [{
  first: 'Hunter',
  last: 'Jakubowski',
  age: 20,
  email: '1@gmail.com',
  campusId: 1
}, {
  first: 'Jermaine',
  last: 'Casper',
  age: 26,
  email: '2@gmail.com',
  campusId: 2
}, {
  first: 'Lavonne',
  last: 'Pollich',
  age: 39,
  email: '3@gmail.com',
  campusId: 3
}, {
  first: 'Ellsworth',
  last: 'Pacocha',
  age: 19,
  email: '4@gmail.com',
  campusId: 4
}, {
  first: 'Aiyana',
  last: 'Veum',
  age: 22,
  email: '5@gmail.com',
  campusId: 1
}, {
  first: 'Logan',
  last: 'Thiel',
  age: 40,
  email: '6@gmail.com',
  campusId: 2
}, {
  first: 'Jaylin',
  last: 'Gleichner',
  age: 25,
  email: '7@gmail.com',
  campusId: 3
}, {
  first: 'Alyson',
  last: 'Nicolas',
  age: 27,
  email: '8@gmail.com',
  campusId: 4
}, {
  first: 'Milton',
  last: 'Chandler',
  age: 23,
  email: '9@gmail.com',
  campusId: 1
}, {
  first: 'Murphy',
  last: 'Willms',
  age: 26,
  email: '10@gmail.com',
  campusId: 2
}, {
  first: 'Maximo',
  last: 'Wolf',
  age: 19,
  email: '11@gmail.com',
  campusId: 3
}, {
  first: 'Caesar',
  last: 'Jacobs',
  age: 33,
  email: '12@gmail.com',
  campusId: 4
}, {
  first: 'Carlos',
  last: 'Weimann',
  age: 35,
  email: '13@gmail.com',
  campusId: 1
}, {
  first: 'Braeden',
  last: 'Mraz',
  age: 20,
  email: '14@gmail.com',
  campusId: 2
}, {
  first: 'Myrtie',
  last: 'OConner',
  age: 27,
  email: '15@gmail.com',
  campusId: 3
}, {
  first: 'Chaim',
  last: 'Hahn',
  age: 29,
  email: '16@gmail.com',
  campusId: 4
}, {
  first: 'Jordy',
  last: 'Treutel',
  age: 30,
  email: '17@gmail.com',
  campusId: 1
}, {
  first: 'Coby',
  last: 'Schiller',
  age: 32,
  email: '18@gmail.com',
  campusId: 2
}];

// const id = () => Math.round(Math.random() * (students.length - 1)) + 1;

const seed = () =>
  Promise.all(campuses.map(campus =>
    Campus.create(campus))
  )
  .then(() =>
  Promise.all(students.map(student =>
    Student.create(student))
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
