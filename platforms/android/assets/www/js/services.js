/* Services */
var cwcServices = angular.module('cwcServices', ['ngResource']);
cwcServices.factory('Points', ['$resource',
	function($resource){
		var url =  "http://smartdroidies.com/cwc/api.php";
		return $resource( url, {}, {
			query: { method: "GET", isArray: true }
		});
}]);

/* Cache Services */
var cacheServices = angular.module('cacheService', []);
cacheServices.factory('cacheService', ['$cacheFactory', function ($cacheFactory) {
			return $cacheFactory('cwc-cache');
		}
	]);
