var simpleexpress=angular.module('simpleexpress', [
'ngRoute',
'ngResource',
 'simpleexpressControllers'
 ]);
  simpleexpress.factory('Articles', ['$http', '$rootScope', '$resource', function($http, $rootScope, $resource){
	
	
	
	return $resource("/backend/articles/", {id: '@id'});
	
	
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