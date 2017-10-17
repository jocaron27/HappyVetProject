const db = require('../');
const Sequelize = require('sequelize');

const Campuses = db.define('campus', {
    name: Sequelize.STRING,
    location: Sequelize.STRING,
    imageUrl: Sequelize.STRING
});

module.exports = Campuses;