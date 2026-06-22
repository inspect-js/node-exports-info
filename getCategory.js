'use strict';

var makeGetCategory = require('node-package-field-info/makeGetCategory');

var ranges = require('./ranges');

/** @type {import('./getCategory')} */
module.exports = makeGetCategory(ranges);
