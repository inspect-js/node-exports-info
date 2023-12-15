'use strict';

var getRangePairs = require('./getRangePairs');

module.exports = function isCategory(category) {
	var all = getRangePairs(category);

	for (var i = 0; i < all.length; i++) {
		if (all[i][1] === category) {
			return true;
		}
	}
	return false;
};
