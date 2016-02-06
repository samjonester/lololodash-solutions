// include the Lo-Dash library
var _ = require("lodash");

var worker = function(list) {
	// do work; return stuff
	return _.filter(list, {active: true})
};

// export the worker function as a nodejs module
module.exports = worker;
