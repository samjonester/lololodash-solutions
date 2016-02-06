// include the Lo-Dash library
var _ = require("lodash");

var worker = function(collection) {
	return _.sortBy(collection, function(val) {
		return -val.quantity;
	});
	// Also possible:
	// return _.sortBy(collection,"quantity").reverse();
};

// export the worker function as a nodejs module
module.exports = worker;
