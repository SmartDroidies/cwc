'use strict';
/* App Module */
var cwcApp = angular.module('cwcApp', ['ngRoute', 'cwcControllers', 'cwcServices',  'cacheService', 'underscore']); 

cwcApp.config(['$routeProvider', 
		function ($routeProvider) {
			$routeProvider.when('/home', {
				templateUrl : 'partials/home.html',
				controller : 'HomeCtrl' 
			}).
			when('/points', {
				templateUrl : 'partials/points.html',
				controller : 'PointsCtrl'
			}).
			when('/fixtures', {
				templateUrl : 'partials/fixtures.html',
				controller : 'FixturesCtrl'
			}).
			when('/result', {
				templateUrl : 'partials/results.html',
				controller : 'FixturesCtrl'
			}).
			when('/stats', {
				templateUrl : 'partials/stats.html',
				controller : 'FixturesCtrl'
			}).
			otherwise({
				redirectTo : '/points'
			});
		}
	]);
	
