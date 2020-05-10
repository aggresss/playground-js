
const tap = require('tap')
const mam = require('../src/awesome-module.js')

// Always call as (found, wanted) by convention
tap.equal(mam(1), 'odd')
tap.equal(mam(2), 'even')
