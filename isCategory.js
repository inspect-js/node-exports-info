'use strict';

var makeIsCategory = require('node-package-field-info/makeIsCategory');

var ranges = require('./ranges');

/** @type {import('./isCategory')} */
module.exports = makeIsCategory(ranges);
