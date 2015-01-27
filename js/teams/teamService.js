'use strict';
var app = angular.module('nbaRoutes');

app.service('teamService', function($http, $q){
	this.addNewGame = function(gameObj) {
		var url = 'https://api.parse.com/1/classes/' + gameObj.homeTeam;
		if (parseInt(gameObj.homeTeamScore) > parseInt(gameObj.opponentScore)) {
			gameObj.won = true;
		} else {
			gameObj.won = false;
		}
		$http.post(url, gameObj);
	};

	this.getTeamData = function(team) {
		var url = 'https://api.parse.com/1/classes/' + team;
		var deferred = $q.defer();
		$http.get(url).then(function(info) {
			var results = info.data.results;
			var wins = 0;
			var losses = 0;
			for (var i = 0; i < results.length; i++) {
				if(results[i].won === true) {
					wins = wins + 1;
				} else if (results[i].won === false) {
					losses = losses + 1;
				}
			}
			results.won = wins;
			results.losses = losses;

			deferred.resolve(results);
		});
		// console.log(deferred.resolve(results));
		return deferred.promise;
	};
});