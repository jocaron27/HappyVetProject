const db = require('../');
const Sequelize = require('sequelize');

const Students = db.define('student', {
    first: Sequelize.STRING,
    last: Sequelize.STRING,
    age: { type: Sequelize.INTEGER},
    email: { type: Sequelize.STRING, allowNull: false}
}, {
    getterMethods: {
        fullName: function() {
            return this.first + ' ' + this.last;
        }
    }
});

module.exports = Students;
