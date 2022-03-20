'use strict';

var find = require('array.prototype.find');
var entries = require('object.entries');

var ranges = require('./ranges');

module.exports = function getRange(category) {
	var found = find(
		entries(ranges),
		function (entry) {
			var cat = entry[1];
			return cat === category;
		}
	);
	if (!found) {
		throw new RangeError('no version range found for category ' + category);
	}
	return found[0];
};
