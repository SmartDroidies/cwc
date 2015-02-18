/* Services */
var tamiltipsServices = angular.module('tamiltipsServices', ['ngResource']);
tamiltipsServices.factory('Tips', ['$resource',
	function($resource){
		var url =  cordova.file.dataDirectory + "/tips.json";
		return $resource( url, {}, {
			query: { method: "GET", isArray: true }
		});
}]);

//Factory for loading the feed from Local Storage
tamiltipsServices.factory ('StorageService', function () {
	var storageFactory = {}; 
	//Collect all tips 
	storageFactory.collectTips = function() {
		var data =  window.localStorage.getItem("tips");
		return JSON.parse(data);
	}
	
	//Collect tips by category
	storageFactory.collectTipsByCat = function(ctgry) {
		var data =  window.localStorage.getItem("tips");
		var allTipsJSON = JSON.parse(data);
		var filtered = [];
		for (var i = 0, len = allTipsJSON.length; i < len; i++) {
			var bCtgryMatch = false;
			var tip = allTipsJSON[i];
			for (var j = 0, length = tip.category.length; j < length; j++) {
				if(tip.category[j] == ctgry) {
					bCtgryMatch = true;
				}
			}
			if(bCtgryMatch == true) {
				filtered.push(tip);
			}
		};
		var sortedFiltered = _.sortBy(filtered, "post_date").reverse();
		return sortedFiltered;
	}
	
	return storageFactory;
}); 

/* Cache Services */
var cacheServices = angular.module('cacheService', []);
cacheServices.factory('cacheService', ['$cacheFactory', function ($cacheFactory) {
			return $cacheFactory('tips-cache');
		}
	]);

