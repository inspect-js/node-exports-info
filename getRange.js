'use strict';

var find = require('array.prototype.find');
var entries = require('object.entries');

var ranges = require('./ranges');

/** @type {import('./getRange')} */
module.exports = function getRange(category) {
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
		throw new RangeError('no version range found for category ' + category);
	}
	return found[0];
};
