'use strict';
const Users = require('./users');
const Vets = require('./vets');

Vets.belongsTo(Users);
Users.hasMany(Vets);