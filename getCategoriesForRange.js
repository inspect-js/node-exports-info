'use strict';

var makeGetCategoriesForRange = require('node-package-field-info/makeGetCategoriesForRange');

var ranges = require('./ranges');

/** @type {import('./getCategoriesForRange')} */
module.exports = makeGetCategoriesForRange(ranges);
