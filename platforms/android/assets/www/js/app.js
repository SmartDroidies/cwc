'use strict';
/* App Module */
/* var cwcApp = angular.module('cwcApp', ['ngRoute', 'ngSanitize', 'ngTouch', 'underscore', 'cwcControllers']); */

var cwcApp = angular.module('cwcApp', ['ngRoute', 'cwcControllers', 'underscore']); 

cwcApp.config(['$routeProvider', 
		function ($routeProvider) {
			$routeProvider.when('/home', {
				templateUrl : 'partials/home.html',
				controller : 'HomeCtrl' 
			}).
			otherwise({
				redirectTo : '/home'
			});
		}
	]);
	
