'use strict'
const db = require('../db')
const api = require('express').Router();

api.use('/vets', require('./vets'));

module.exports = api
