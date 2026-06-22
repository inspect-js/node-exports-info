'use strict';

var makeGetRangePairs = require('node-package-field-info/makeGetRangePairs');

var ranges = require('./ranges');

/** @type {import('./getRangePairs')} */
module.exports = makeGetRangePairs(ranges);
