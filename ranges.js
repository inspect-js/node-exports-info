'use strict';

module.exports = {
	// TODO: add "JSON imports"
	'>= 17': 'pattern-trailers-no-dir-slash',
	'^14.19 || ^16.9': 'pattern-trailers',
	'^12.20 || 15.x || 16.0 - 16.8': 'patterns',
	'14.13 - 14.18': 'broken-dir-slash-patterns',
	'^13.14 || 14.0 - 14.12': 'broken-dir-slash-conditions',
	'12.17 - 12.19 || 13.7 - 13.13': 'conditions',
	'13.3 - 13.6': 'experimental',
	'13.0 - 13.2': 'broken',
	'< 12.17': 'pre-exports'
};
