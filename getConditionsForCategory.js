'use strict';

var entries = require('object.entries');

var ranges = require('./ranges');

/** @type {import('./getConditionsForCategory')} */
module.exports = function getConditionsForCategory(category) {
	var rangeEntries = entries(ranges);
	var found = false;
	for (var i = 0; !found && i < rangeEntries.length; i++) {
		var entry = rangeEntries[i];
		found = entry[1] === category;
	}
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
