'use strict'
const db = require('../db')
const api = require('express').Router();

api.use('/students', require('./students'));

api.use('/campuses', require('./campuses'));

module.exports = api
