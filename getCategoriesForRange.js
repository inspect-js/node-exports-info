'use strict';

var flatMap = require('array.prototype.flatmap');
var entries = require('object.entries');
var intersects = require('semver').intersects;

var ranges = require('./ranges');

module.exports = function getCategoriesForRange(rangeA) {
	return flatMap(
		entries(ranges),
		function (entry) {
			var rangeB = entry[0];
			var category = entry[1];
			return intersects(rangeA, rangeB) ? category : [];
		}
	);
};
