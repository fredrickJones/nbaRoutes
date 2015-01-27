'use strict';
var app = angular.module('nbaRoutes');

app.controller('teamCtrl', function($scope, $routeParams, teamService, teamData){
	$scope.teamData = teamData;
	$scope.newGame = {};
	$scope.showNewGameForm = false;
	$scope.toggleNewGameForm = function() {
		if($scope.showNewGameForm === true) {
			$scope.showNewGameForm = false;
		} else if($scope.showNewGameForm === false)
			$scope.showNewGameForm = true;
		};
	});
	if($routeParams.team === 'utahjazz') {
		$scope.homeTeam = 'Utah Jazz' && $scope.logoPath = 'images/jazz-logo.png';
	} else if($routeParams.team === 'losangeleslakers') {
		$scope.homeTeam = 'Los Angeles Lakers' && $scope.logoPath = 'images/lakers-logo.png';
	} else if($routeParams.team === 'miamiheat') {
		$scope.homeTeam = 'Miami Heat' && $scope.logoPath = 'images/heat-logo.png';
	};
});