'use strict';

/* Controllers */
var cwcControllers = angular.module('cwcControllers', []);

cwcControllers.controller('HomeCtrl', ['$scope',  '_',
  function($scope) {
	console.log('Controller Triggered');
	$scope.data = "Angular Setup Ready";
  }]
);

//Controller to display points
cwcControllers.controller('PointsCtrl', ['$scope', '$routeParams', 'Points', 'cacheService',
  function($scope, $routeParams, Points, cacheService) {
	$scope.loadPoints = function () {
		$('#spinner').show();
		$('#main').hide();
		var cache = cacheService.get('points');
		if(cache) {
			//console.log('Loading data from cache for : ' + cache);
			$scope.points = cache;
			$('#main').show();
			$('#spinner').hide();
		} else {
			//console.log('Loading data from rest service ' + cache);
			Points.query({}, function(response) {
				console.log('Response ' + JSON.stringify(response));
				var points = Points.query();
				if (!angular.isUndefined(points)) {
					cacheService.put('points', points);
				}
				$scope.points = points;
				$('#main').show();
				$('#spinner').hide();
			}); 
		}
	}
	
	//Loading the Points
	$scope.loadPoints();
}]);

//Controller to display fixtures
cwcControllers.controller('FixturesCtrl', ['$scope', '$routeParams', 'Fixture', 'cacheService',
  function($scope, $routeParams, Fixture, cacheService) {
	$scope.loadFixture = function () {
		$('#spinner').show();
		$('#main').hide();
		var cache = cacheService.get('fixture');
		if(cache) {
			//console.log('Loading data from cache for : ' + cache);
			$scope.points = cache;
			$('#main').show();
			$('#spinner').hide();
		} else {
			//console.log('Loading data from rest service ' + cache);
			Fixture.query({}, function(response) {
				console.log('Response ' + JSON.stringify(response));
				var fixture = Fixture.query();
				if (!angular.isUndefined(fixture)) {
					cacheService.put('fixture', fixture);
				}
				$scope.fixture = fixture;
				$('#main').show();
				$('#spinner').hide();
			}); 
		}
	}
	
	//Loading the Fixture
	$scope.loadFixture();
}]);

