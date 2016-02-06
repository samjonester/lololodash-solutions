// include the Lo-Dash library
var _ = require("lodash");

var worker = function(userComments) {
	// do work; return stuff
	return _.chain(userComments)
		.groupBy('username')
		.map(function(commentGroup, username) {
			return {
				'username': username,
				'comment_count': _.size(commentGroup)
			};
		})
		.sortBy('comment_count')
		.reverse()
		.value();
};

// export the worker function as a nodejs module
module.exports = worker;
