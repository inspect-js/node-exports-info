'use strict';

var makeGetConditionsForCategory = require('node-package-field-info/makeGetConditionsForCategory');

var isCategory = require('./isCategory');

// categories that support node-addons condition (added in v14.19/v16.10)
/** @type {{ [k: string]: boolean | null | undefined }} */
var nodeAddonsCategories = {
	__proto__: null,
	'pattern-trailers': true,
	'pattern-trailers+json-imports': true,
	'pattern-trailers-no-dir-slash': true,
	'pattern-trailers-no-dir-slash+json-imports': true,
	'require-esm': true,
	'strips-types': true
};

// categories that support module-sync condition (added in v22.12)
/** @type {{ [k: string]: boolean | null | undefined }} */
var moduleSyncCategories = {
	__proto__: null,
	'require-esm': true,
	'strips-types': true
};

// categories that do not support conditions at all
/** @type {{ [k: string]: boolean | null | undefined }} */
var nullCategories = {
	__proto__: null,
	broken: true,
	'pre-exports': true
};

// categories that only support the `default` condition
/** @type {{ [k: string]: boolean | null | undefined }} */
var defaultOnlyCategories = {
	__proto__: null,
	experimental: true
};

/** @type {import('./getConditionsForCategory')} */
module.exports = makeGetConditionsForCategory(isCategory, {
	addonsCategories: nodeAddonsCategories,
	moduleSyncCategories: moduleSyncCategories,
	nullCategories: nullCategories,
	defaultOnlyCategories: defaultOnlyCategories
});
