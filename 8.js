// include the Lo-Dash library
var _ = require("lodash");

var worker = function(salaries) {
	// do work; return stuff
	return _.reduce(salaries, function(acc, salary){
		if (salary.income > acc.average) {
			acc.overperform = _.sortBy(acc.overperform.concat(salary), 'income');
		} else {
			acc.underperform = _.sortBy(acc.underperform.concat(salary), 'income');
		}
		return acc;
	}, {
		'average': _.sumBy(salaries, 'income') / _.size(salaries),
		'underperform': [],
		'overperform': []
	});
};

// export the worker function as a nodejs module
module.exports = worker;
