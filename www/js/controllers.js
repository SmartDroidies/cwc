'use strict';

/* Controllers */
var cwcControllers = angular.module('cwcControllers', []);

cwcControllers.controller('HomeCtrl', ['$scope',  '_',
  function($scope) {
	console.log('Controller Triggered');
	$scope.data = "Angular Setup Ready";
  }]
);
