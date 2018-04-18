const CONFIG = require('./knexfile')[process.env.NODE_ENV || 'development']

const knex = require('knex')(CONFIG)

module.exports = knex
knex.migrate.latest([CONFIG])
