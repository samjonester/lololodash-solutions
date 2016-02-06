// include the Lo-Dash library
var _ = require("lodash");

var worker = function(words) {
	// do work; return stuff
	return _.chain(words)
		.map(function(word) {
			return (word + "chained").toUpperCase();
		})
		.sortBy()
		.value();
};

// export the worker function as a nodejs module
module.exports = worker;
