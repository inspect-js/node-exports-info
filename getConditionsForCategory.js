'use strict';

var find = require('array.prototype.find');
var entries = require('object.entries');

var ranges = require('./ranges');

/** @type {import('./getConditionsForCategory')} */
module.exports = function getConditionsForCategory(category) {
	/** @type {import('./types').RangePair | undefined} */
	var found = find(
		entries(ranges),
		/** @type {(entry: import('./types').RangePair) => boolean} */
		function (entry) {
			var cat = entry[1];
			return cat === category;
		}
	);
	if (!found) {
		throw new RangeError('invalid category ' + category);
	}
	var moduleSystem = arguments.length > 1 ? arguments[1] : null;
	if (arguments.length > 1 && moduleSystem !== 'import' && moduleSystem !== 'require') {
		throw new TypeError('invalid moduleSystem: must be `\'require\'` or `\'import\'` if provided, got' + moduleSystem);
	}

	if (category === 'experimental') {
		return ['default'];
	}
	if (category !== 'broken' && category !== 'pre-exports') {
		if (moduleSystem === 'import') {
			return [
				'import',
				'node',
				'default'
			];
		}
		if (moduleSystem === 'require') {
			return [
				'node',
				'require',
				'default'
			];
		}
		return [
			'import',
			'node',
			'require',
			'default'
		];
	}
	return null;
};
