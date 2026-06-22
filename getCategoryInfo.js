'use strict';

var makeGetCategoryInfo = require('node-package-field-info/makeGetCategoryInfo');

var getCategoryFlags = require('./getCategoryFlags');
var getConditionsForCategory = require('./getConditionsForCategory');

/** @type {import('./getCategoryInfo')} */
module.exports = makeGetCategoryInfo(getConditionsForCategory, getCategoryFlags);
