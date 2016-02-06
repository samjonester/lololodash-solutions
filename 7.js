// include the Lo-Dash library
var _ = require("lodash");

var worker = function(orders) {
	// do work; return stuff
	return _.chain(orders)
		.groupBy('article')
		.map(function(groupings, article) {
			return {'article': parseInt(article), 'total_orders': _.reduce(groupings, function(sum, group) {
				return sum + group.quantity;
			}, 0) };
		})
		.sortBy('article')
		.reverse()
		.value();
};

// export the worker function as a nodejs module
module.exports = worker;
