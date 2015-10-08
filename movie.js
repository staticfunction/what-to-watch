var randomMovie = require('random-movie');

exports.getMovie = function(callback) {
	randomMovie(function(err, data) {
		if(err) return callback(null);
		
		return callback(data);
	})
}