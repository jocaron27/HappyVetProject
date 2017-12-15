'use strict';
const Users = require('./users');
const Vets = require('./vets');

Vets.hasMany(Users);
Users.hasMany(Vets);