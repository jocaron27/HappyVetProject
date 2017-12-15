const db = require('../');
const Sequelize = require('sequelize');

const Vets = db.define('vets', {
    name: Sequelize.STRING,
    description: Sequelize.STRING
});

module.exports = Vets;