var simpleexpress=angular.module('simpleexpress', [
'ngRoute',
'ngResource',
 'simpleexpressControllers'
 ]);
  simpleexpress.factory('Articles', ['$http', '$rootScope', function($http, $rootScope){
	
	
	var service={};
	var articles=[];
	$http.get("/backend/articles/").success(function(data){
		
		articles=data.articles;
		$rootScope.$broadcast('articlesLoaded');
	});
	service.getAll=function(){
		
		return articles;
		
	};
	return service;
	
	
}]);
simpleexpress.config(['$resourceProvider', function($resourceProvider) {
  // Don't strip trailing slashes from calculated URLs
  $resourceProvider.defaults.stripTrailingSlashes = false;
}]);
simpleexpress.config([
'$routeProvider',
function($routeProvider){
	
	$routeProvider.when('/', {
		
		"templateUrl" : "/views/index.view.html",
		"controller" : "IndexController"
		
	});
	
}]);