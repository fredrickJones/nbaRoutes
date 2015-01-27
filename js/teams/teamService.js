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
		$http.get(url).then(function(resp) {
			resp = resp.data.data;
			deferred.resolve(resp);
		});

		return deferred.promise;
	};
});