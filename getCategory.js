'use strict';

var find = require('array.prototype.find');
var entries = require('object.entries');
var satisfies = require('semver').satisfies;

var ranges = require('./ranges');

module.exports = function getCategory() {
	var version = arguments.length > 0 ? arguments[0] : process.version;
	var found = find(
		entries(ranges),
		function (entry) {
			var range = entry[0];
			return satisfies(version, range);
		}
	);
	if (!found) {
		throw new RangeError('no category found for version ' + version);
	}
	return found[1];
};
