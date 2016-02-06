// include the Lo-Dash library
var _ = require("lodash");

var worker = function(logins) {
	// do work; return stuff
	return _.template('Hello <%= name %> (logins: <%= _.size(login) %>)')(logins);
};

// export the worker function as a nodejs module
module.exports = worker;
