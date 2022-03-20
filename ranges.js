'use strict';

module.exports = {
	'< 12.17': 'pre-exports',
	'13.0 - 13.2': 'broken',
	'13.3 - 13.6': 'experimental',
	'12.17 - 12.19 || ^13.7 || 14.0 - 14.12': 'conditions',
	'^12.20 || 14.13 - 14.18 || 15.x || 16.0 - 16.8': 'patterns',
	'^14.19 || >= 16.9': 'pattern-trailers'
	// TODO: add "JSON imports"
};
