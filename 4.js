// include the Lo-Dash library
var _ = require("lodash");

var worker = function(cities) {
	// do work; return stuff
	var classifiedCities = {'hot': [], 'warm': []};

	var check_temp = function(temp) {
		return temp > 19;
	}
	
	_.forEach(cities, function(temps, city) {
		if (_.every(temps, check_temp)) {
			classifiedCities.hot.push(city);
		} else if (_.some(temps, check_temp)) {
			classifiedCities.warm.push(city);
		}
	});

	return classifiedCities;
};

// export the worker function as a nodejs module
module.exports = worker;
