'use strict';

var makeGetRange = require('node-package-field-info/makeGetRange');

var ranges = require('./ranges');

/** @type {import('./getRange')} */
module.exports = makeGetRange(ranges);
