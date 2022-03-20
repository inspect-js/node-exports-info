'use strict';

var test = require('tape');
var forEach = require('for-each');

var getConditionsForCategory = require('../getConditionsForCategory');
var getRangePairs = require('../getRangePairs');

test('getConditionsForCategory', function (t) {
	t['throws'](
		function () { getConditionsForCategory('not a category'); },
		RangeError,
		'invalid category throws'
	);

	forEach(getRangePairs(), function (pair) {
		var category = pair[1];
		t.test('category: ' + category, function (st) {
			if (category === 'broken' || category === 'pre-exports') {
				st.equal(
					getConditionsForCategory(category),
					null,
					'category that does not support conditions, yields null'
				);
			} else {
				var conditions = getConditionsForCategory(category);
				st.ok(Array.isArray(conditions), 'returns an array');
			}

			st.end();
		});
	});

	t.end();
});
