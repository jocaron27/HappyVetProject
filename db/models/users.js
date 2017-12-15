const db = require('../');
const Sequelize = require('sequelize');

const Users = db.define('users', {
    name: Sequelize.STRING,
});

module.exports = Users;