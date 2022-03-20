'use strict';

var find = require('array.prototype.find');
var entries = require('object.entries');

var ranges = require('./ranges');

module.exports = function getConditionsForCategory(category) {
	var found = find(
		entries(ranges),
		function (entry) {
			var cat = entry[1];
			return cat === category;
		}
	);
	if (!found) {
		throw new RangeError('invalid category ' + category);
	}
	if (category === 'experimental') {
		return ['default'];
	}
	if (category !== 'broken' && category !== 'pre-exports') {
		return [
			'import',
			'node',
			'require',
			'default'
		];
	}
	return null;
};
