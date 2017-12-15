'use strict';
const Users = require('./users');
const Vets = require('./vets');

Vets.belongsToMany(Users, {through: 'user-vets'})