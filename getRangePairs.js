'use strict';

var entries = require('object.entries');

var ranges = require('./ranges');

module.exports = function getRangePairs() {
	return entries(ranges);
};
